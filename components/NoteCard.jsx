function NoteCard({ id, title, content, category, date, onDelete }) {
  const categoryColors = {
    Personal: "bg-pink-200 text-pink-800",
    Work: "bg-blue-200 text-blue-800",
    Study: "bg-purple-200 text-purple-800",
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-semibold">{title}</h2>

        <span
          className={`px-3 py-1 rounded-full text-sm ${
            categoryColors[category]
          }`}
        >
          {category}
        </span>
      </div>

      <p className="text-gray-600 mb-4">{content}</p>

      <p className="text-sm text-gray-400">{date}</p>
      <button
  onClick={() => onDelete(id)}
  className="mt-4 bg-red-400 text-white px-3 py-1 rounded"
>
  Delete
</button>
    </div>
  );
}

export default NoteCard;