import NoteCard from "./NoteCard";

function NoteGrid({ notes, onDelete }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          id={note.id}
          title={note.title}
          content={note.content}
          category={note.category}
          date={note.date}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default NoteGrid;