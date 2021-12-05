export default function Filter({ onSearch, onCheck }) {
  return (
    <div style={{ border: "2px solid blue", padding: "10px" }}>
      <input
        type="text"
        placeholder="Enter Search Keyword..."
        onKeyUp={(e) => onSearch(e.target.value)}
      />
      <div>
        <label>
          <input type="checkbox" onChange={(e) => onCheck(e.target.checked)} />
          <span>Show In Stock Only</span>
        </label>
      </div>
    </div>
  );
}
