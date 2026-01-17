import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import { FaCopy, FaDownload } from "react-icons/fa";

export default function OutputBox({ output }) {
  useEffect(() => {
    Prism.highlightAll();
  }, [output]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    alert("Copied to clipboard!");
  };

  const downloadFile = () => {
    const element = document.createElement("a");
    const file = new Blob([output], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "generated_code.txt";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div className="card output-card">
      <div className="output-header">
        <h2>📜 AI Output</h2>
        <div>
          <button onClick={copyToClipboard}><FaCopy /></button>
          <button onClick={downloadFile}><FaDownload /></button>
        </div>
      </div>

      <pre>
        <code className="language-python">
          {output || "// Your code will appear here..."}
        </code>
      </pre>
    </div>
  );
}
