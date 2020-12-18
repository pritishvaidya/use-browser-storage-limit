import './App.css';
import useBrowserStorageLimit from "use-browser-storage-limit";

function App() {
  const { loading, quota, usage, percentage, error } = useBrowserStorageLimit()

  return (
    <div className="App">
      {loading ? <p>Loading...</p> : error ? <div><p>Error: {error}</p></div> : <div>
        <p>Total Quota: {quota}</p>
        <p>Total Usage: {usage}</p>
        <p>Percentage Used: {percentage}%</p>
      </div>}
    </div>
  );
}

export default App;
