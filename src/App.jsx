import SearchBar from "../components/SearchBar";
import NewNoteButton from "../components/NewNoteButton";
import NoteGrid from "../components/NoteGrid";
import NewNoteModal from "../components/NewNoteModal";
import AuthForm from "../components/AuthForm";
import { useState, useEffect } from "react";

const getApiBaseUrl = () => {
  const configuredUrl = import.meta.env.VITE_API_BASE_URL?.trim();

  if (!configuredUrl) {
    return "http://localhost:5000";
  }

  return configuredUrl.replace(/\/$/, "");
};

const API_BASE_URL = getApiBaseUrl();

function App() {
  const [notes, setNotes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingNote, setEditingNote] = useState(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [authMode, setAuthMode] = useState("login");
  const [authLoading, setAuthLoading] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const fetchNotes = async () => {
    if (!token) {
      setNotes([]);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/api/notes`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to load notes: ${response.status}`);
      }

      const data = await response.json();
      setNotes(
        data.map((note) => ({
          id: note._id,
          title: note.title,
          content: note.body,
          category: note.category,
          date: note.updatedAt
            ? new Date(note.updatedAt).toLocaleDateString()
            : "",
        }))
      );
      setError("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, [token]);

  const addNote = async (newNote) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/notes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: newNote.title,
          body: newNote.content,
          category: newNote.category,
          userId: user?._id || user?.id,
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to create note: ${response.status}`);
      }

      const createdNote = await response.json();
      setNotes((currentNotes) => [
        ...currentNotes,
        {
          id: createdNote._id,
          title: createdNote.title,
          content: createdNote.body,
          category: createdNote.category,
          date: createdNote.updatedAt
            ? new Date(createdNote.updatedAt).toLocaleDateString()
            : new Date().toLocaleDateString(),
        },
      ]);
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  const updateNote = async (updatedNote) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/notes/${updatedNote.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: updatedNote.title,
          body: updatedNote.content,
          category: updatedNote.category,
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to update note: ${response.status}`);
      }

      const savedNote = await response.json();

      setNotes((currentNotes) =>
        currentNotes.map((note) =>
          note.id === savedNote._id
            ? {
                id: savedNote._id,
                title: savedNote.title,
                content: savedNote.body,
                category: savedNote.category,
                date: savedNote.updatedAt
                  ? new Date(savedNote.updatedAt).toLocaleDateString()
                  : new Date().toLocaleDateString(),
              }
            : note
        )
      );

      setEditingNote(null);
      setShowModal(false);
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  const deleteNote = async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/notes/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to delete note: ${response.status}`);
      }

      setNotes((currentNotes) => currentNotes.filter((note) => note.id !== id));
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEditNote = (id) => {
    const noteToEdit = notes.find((note) => note.id === id);

    if (!noteToEdit) {
      return;
    }

    setEditingNote(noteToEdit);
    setShowModal(true);
  };

  const handleAuthSubmit = async (formData) => {
    setAuthLoading(true);
    setError("");

    try {
      const endpoint = authMode === "login" ? "/api/auth/login" : "/api/auth/register";
      const payload = {
        name: formData.name?.trim(),
        email: formData.email?.trim().toLowerCase(),
        password: formData.password,
      };

      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Authentication failed");
      }

      if (authMode === "login") {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user || { email: payload.email }));
        setToken(data.token);
        setUser(data.user || { email: payload.email });
      } else {
        setAuthMode("login");
        setError("Registration successful. Please log in.");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken("");
    setUser(null);
    setNotes([]);
    setError("");
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase())
  );

  if (!token) {
    return (
      <div className="min-h-screen bg-pink-50 p-6">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold">My Notes</h1>
          <p className="mt-2 text-gray-600">Register or login to manage your personal notes.</p>
        </div>
        <AuthForm
          mode={authMode}
          onSubmit={handleAuthSubmit}
          loading={authLoading}
          error={error}
          onSwitchMode={setAuthMode}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">My Notes</h1>
          <p className="text-gray-600">Welcome back, {user?.name || user?.email || "user"}.</p>
        </div>
        <button
          onClick={handleLogout}
          className="rounded bg-gray-700 px-4 py-2 text-white"
        >
          Logout
        </button>
      </div>

      {error ? (
        <p className="mb-4 rounded-lg bg-red-100 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      ) : null}

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <SearchBar search={search} setSearch={setSearch} />
        <NewNoteButton onClick={() => setShowModal(true)} />
      </div>

      {loading ? (
        <p className="text-center text-gray-600">Loading notes...</p>
      ) : null}

      {!loading ? (
        <NoteGrid notes={filteredNotes} onDelete={deleteNote} onEdit={handleEditNote} />
      ) : null}

      {showModal && (
        <NewNoteModal
          onAddNote={addNote}
          onUpdateNote={updateNote}
          initialNote={editingNote}
          onClose={() => {
            setShowModal(false);
            setEditingNote(null);
          }}
        />
      )}
    </div>
  );
}

export default App;