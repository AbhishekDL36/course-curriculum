import React, { useState } from "react";

const WebDesignerVisualizer = () => {
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [finalOutput, setFinalOutput] = useState("");

  const handleSendToCSS = () => {
    document.getElementById("cssBox").style.border = "2px solid red";
    setTimeout(() => {
      document.getElementById("cssBox").style.border = "2px solid #007bff";
    }, 500);
  };

  const handleGenerateOutput = () => {
    setFinalOutput(`
      <html>
        <head>
          <style>${cssCode}</style>
        </head>
        <body>${htmlCode}</body>
      </html>
    `);
  };

  return (
    <div className="container">
      <h1>Web Designing Visualizer</h1>

      <div className="visualization">

        <div className="html-box">
          <h2>HTML</h2>
          <textarea
            className="input-field"
            placeholder="Write HTML here..."
            value={htmlCode}
            onChange={(e) => setHtmlCode(e.target.value)}
          ></textarea>
          <button className="submit-button" onClick={handleSendToCSS}>
            Send to CSS
          </button>
        </div>

      
        <div className="css-box" id="cssBox">
          <h2>CSS</h2>
          <textarea
            className="input-field"
            placeholder="Write CSS here..."
            value={cssCode}
            onChange={(e) => setCssCode(e.target.value)}
          ></textarea>
          <button className="submit-button" onClick={handleGenerateOutput}>
            Get Final Output
          </button>
        </div>

        
        <div className="output-box">
          <h2>Output</h2>
          <iframe
            title="output"
            srcDoc={finalOutput}
            sandbox="allow-scripts"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default WebDesignerVisualizer;
