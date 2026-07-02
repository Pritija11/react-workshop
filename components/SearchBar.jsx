function SearchBar() {
  return (
    <div className="w-full">
      <input
        type="text"
        placeholder="Search notes..."
        className="w-full p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-pink-300"
      />
    </div>
  );
}

export default SearchBar;