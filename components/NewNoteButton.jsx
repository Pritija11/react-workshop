function NewNoteButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-5 py-3 bg-pink-300 text-white rounded-lg hover:bg-pink-400 transition"
    >
      + New Note
    </button>
  );
}

export default NewNoteButton;