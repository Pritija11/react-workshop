import { useState } from "react";

function NewNoteModal({ onAddNote, onClose }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Personal");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newNote = {
      id: Date.now(),
      title,
      content,
      category,
      date: new Date().toLocaleDateString(),
    };

    onAddNote(newNote);

    setTitle("");
    setContent("");
    setCategory("Personal");

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl w-96 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">New Note</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            className="w-full border p-2 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <textarea
            placeholder="Write your note..."
            className="w-full border p-2 rounded"
            rows="4"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />

          <select
            className="w-full border p-2 rounded"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Personal</option>
            <option>Work</option>
            <option>Study</option>
          </select>

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 bg-pink-400 text-white rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewNoteModal;