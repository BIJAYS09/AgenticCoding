import { useState } from "react";
import CodeForm from "./components/CodeForm";
import OutputBox from "./components/OutputBox";
import HistoryPanel from "./components/HistoryPanel";
import { FaMoon, FaSun } from "react-icons/fa";
import "./App.css";

function App() {
  const [output, setOutput] = useState("");
  const [history, setHistory] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <header>
        <h1>🚀 Agentic AI Coding Tutor</h1>
        <button className="theme-btn" onClick={toggleTheme}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </header>

      <div className="main">
        <CodeForm setOutput={setOutput} setHistory={setHistory} />
        <OutputBox output={output} />
        <HistoryPanel history={history} setOutput={setOutput} />
      </div>
    </div>
  );
}

export default App;
