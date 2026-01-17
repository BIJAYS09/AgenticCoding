import { useState } from "react";
import { generateCode } from "../api/api";
import { FaPython, FaJava, FaJs, FaCuttlefish, FaDownload } from "react-icons/fa";

export default function CodeForm({ setOutput, setHistory }) {
  const [language, setLanguage] = useState("Python");
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!prompt) return alert("Enter a prompt!");
    setLoading(true);

    try {
      const res = await generateCode({ language, prompt });
      setOutput(res.data.response);
      setHistory((prev) => [
        ...prev,
        { language, prompt, output: res.data.response },
      ]);
    } catch {
      setOutput("❌ Backend error");
    }

    setLoading(false);
  };

  const languageIcon = {
    Python: <FaPython />,
    Java: <FaJava />,
    JavaScript: <FaJs />,
    "C++": <FaCuttlefish />,
  };

  return (
    <div className="card form-card">
      <h2>🎯 Generate Code</h2>

      <div className="language-select">
        {languageIcon[language]}{" "}
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option>Python</option>
          <option>Java</option>
          <option>JavaScript</option>
          <option>C++</option>
        </select>
      </div>

      <textarea
        placeholder="Describe your task..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "⚡ Generating..." : "✨ Generate Code"}
      </button>
    </div>
  );
}
