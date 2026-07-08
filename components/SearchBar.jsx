function SearchBar({ search, setSearch }) {
  return (
    <div className="w-full">
      <input
        type="text"
        placeholder="Search notes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-pink-300"
      />
    </div>
  );
}

export default SearchBar;