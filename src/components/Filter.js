export default function Filter({ onSearch, onCheck }) {
  return (
    <div className="border-2 border-blue-500 p-4">
      <input
        onKeyUp={(e) => onSearch(e.target.value)}
        type="text"
        placeholder="Enter Search Keyword..."
        className="border rounded-md border-gray-400 p-2 mb-2 text-sm"
      />
      <div>
        <label className="flex items-center justify-center">
          <input onChange={(e) => onCheck(e.target.checked)} type="checkbox" />
          <span className="text-sm ml-2">Show In Stock Only</span>
        </label>
      </div>
    </div>
  );
}
