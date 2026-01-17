export default function HistoryPanel({ history, setOutput }) {
  return (
    <div className="card history-card">
      <h2>🕒 History</h2>
      {history.length === 0 && <p>No history yet</p>}
      {history.map((item, index) => (
        <div
          key={index}
          className="history-item"
          onClick={() => setOutput(item.output)}
        >
          <strong>{item.language}</strong>
          <p>{item.prompt.slice(0, 40)}...</p>
        </div>
      ))}
    </div>
  );
}
