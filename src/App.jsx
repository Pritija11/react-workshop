import SearchBar from "../components/SearchBar";
import NewNoteButton from "../components/NewNoteButton";
import NoteGrid from "../components/NoteGrid";

function App() {
  const notes = [
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
  ];

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">My Notes</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <SearchBar />
        <NewNoteButton />
      </div>

      <NoteGrid notes={notes} />
    </div>
  );
}

export default App;