import SearchBar from "../components/SearchBar";
import NewNoteButton from "../components/NewNoteButton";
import NoteGrid from "../components/NoteGrid";
import NewNoteModal from "../components/NewNoteModal";
import { useState, useEffect } from "react";

function App() {
  const [notes, setNotes] = useState([
  {
    id: 1,
    title: "Shopping List",
    content: "Buy milk, bread, eggs",
    category: "Personal",
    date: "July 2",
  },
  {
    id: 2,
    title: "Meeting Notes",
    content: "Discuss project timeline",
    category: "Work",
    date: "July 1",
  },
  {
    id: 3,
    title: "Study Plan",
    content: "Revise React hooks",
    category: "Study",
    date: "June 30",
  },
  {
    id: 4,
    title: "Workout Goals",
    content: "Leg day and cardio",
    category: "Personal",
    date: "June 29",
  },
]);

const [showModal, setShowModal] = useState(false);
const [search, setSearch] = useState("");

useEffect(() => {
  console.log("Total notes:", notes.length);
}, [notes]);

const addNote = (newNote) => {
  setNotes([...notes, newNote]);
};

const deleteNote = (id) => {
  const updatedNotes = notes.filter((note) => note.id !== id);
  setNotes(updatedNotes);
};

const filteredNotes = notes.filter((note) =>
  note.title.toLowerCase().includes(search.toLowerCase())
);

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">My Notes</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <SearchBar
  search={search}
  setSearch={setSearch}
/>
        <NewNoteButton onClick={() => setShowModal(true)} />
      </div>

      <NoteGrid
  notes={filteredNotes}
  onDelete={deleteNote}
/>

      {showModal && (
  <NewNoteModal
    onAddNote={addNote}
    onClose={() => setShowModal(false)}
  />
)}
    </div>
  );
}

export default App;