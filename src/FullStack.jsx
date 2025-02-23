// // eslint-disable-next-line no-unused-vars
// import React, { useEffect, useState, useRef } from "react";
// import { EditorState } from "@codemirror/state";
// import { EditorView, keymap } from "@codemirror/view";
// import { defaultKeymap } from "@codemirror/commands";
// import { html } from "@codemirror/lang-html";
// import { javascript } from "@codemirror/lang-javascript";
// import { css } from "@codemirror/lang-css";
// import "./frontendEditor.css"; // Import your CSS file here

// const FullStackEditor = () => {
//   const [htmlCode, setHtmlCode] = useState(
//     `<h1 id="hello">Hello World</h1>\n<button onclick="changeText()">Click me!</button>\n`
//   );
//   const [cssCode, setCssCode] = useState(
//     `#hello { color: red; font-size: 50px; text-align: center; }`
//   );
//   const [jsCode, setJsCode] = useState(
//     `function changeText() { document.getElementById('hello').innerText = 'You clicked the button!'; }`
//   );
//   const [backendCode, setBackendCode] = useState(
//     `const express = require('express');\nconst app = express();\n\napp.get('/', (req, res) => {\n  res.send('Hello from the server!');\n});\n\napp.listen(3000, () => {\n  console.log('Server is running');\n});`
//   );

//   const iframeRef = useRef(null);
//   const editorRefHTML = useRef(null);
//   const editorRefCSS = useRef(null);
//   const editorRefJS = useRef(null);
//   const editorRefBackend = useRef(null);

//   useEffect(() => {
//     const startStateHTML = EditorState.create({
//       doc: htmlCode,
//       extensions: [
//         keymap.of(defaultKeymap),
//         html(),
//         EditorView.updateListener.of((update) => {
//           if (update.docChanged) {
//             setHtmlCode(update.state.doc.toString());
//           }
//         }),
//       ],
//     });

//     const startStateCSS = EditorState.create({
//       doc: cssCode,
//       extensions: [
//         keymap.of(defaultKeymap),
//         css(),
//         EditorView.updateListener.of((update) => {
//           if (update.docChanged) {
//             setCssCode(update.state.doc.toString());
//           }
//         }),
//       ],
//     });

//     const startStateJS = EditorState.create({
//       doc: jsCode,
//       extensions: [
//         keymap.of(defaultKeymap),
//         javascript(),
//         EditorView.updateListener.of((update) => {
//           if (update.docChanged) {
//             setJsCode(update.state.doc.toString());
//           }
//         }),
//       ],
//     });



//     const startStateBackend = EditorState.create({
//       doc: backendCode,
//       extensions: [
//         keymap.of(defaultKeymap),
//         javascript(),  // Use JavaScript extension for Node.js/Express code
//         EditorView.updateListener.of((update) => {
//           if (update.docChanged) {
//             setBackendCode(update.state.doc.toString());
//           }
//         }),
//       ],
//     });
    

//     new EditorView({
//       state: startStateHTML,
//       parent: editorRefHTML.current,
//     });
//     new EditorView({
//       state: startStateCSS,
//       parent: editorRefCSS.current,
//     });
//     new EditorView({
//       state: startStateJS,
//       parent: editorRefJS.current,
//     });
//     new EditorView({
//       state: startStateBackend,
//       parent: editorRefBackend.current,
//     });
//   }, []); // Only run once when the component mounts

//   // Function to run front-end code
//   const runFrontEndCode = () => {
//     const code = `
//       <html>
//         <head>
//           <style>${cssCode}</style>
//         </head>
//         <body>
//           ${htmlCode}
//           <script>${jsCode}</script>
//         </body>
//       </html>
//     `;
//     if (iframeRef.current) {
//       iframeRef.current.srcdoc = code;
//     }
//   };

//   // Function to run back-end code
//   const runBackEndCode = async () => {
//     try {
//       const response = await fetch("/run-backend", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ backendCode }),
//       });
//       const result = await response.json();
//       alert(result.message); // Show response from backend execution
//     } catch (error) {
//       alert("Error running backend code: " + error.message);
//     }
//   };

//   return (
//     <div className="web-designing-container">
//       <div className="content-box">
//         <h1 className="main-heading">Full-Stack Development Editor</h1>
//         <p className="description">
//           Write HTML, CSS, JavaScript for the frontend and Node.js (Express) for the backend. Click "Run" to see the live output!
//         </p>

//         <div className="section">
//           <h2 className="sub-heading">HTML Code</h2>
//           <div ref={editorRefHTML} className="editor-container"></div>

//           <h2 className="sub-heading">CSS Code</h2>
//           <div ref={editorRefCSS} className="editor-container"></div>

//           <h2 className="sub-heading">JavaScript Code</h2>
//           <div ref={editorRefJS} className="editor-container"></div>

//           <h2 className="sub-heading">Backend Code (Node.js/Express)</h2>
//           <div ref={editorRefBackend} className="editor-container"></div>
//         </div>

//         <button className="learn-btn" onClick={runFrontEndCode}>
//           Run Front-End Code
//         </button>

//         <button className="learn-btn" onClick={runBackEndCode}>
//           Run Back-End Code
//         </button>

//         <iframe ref={iframeRef} className="output-frame" title="output"></iframe>
//       </div>
//     </div>
//   );
// };

// export default FullStackEditor;



// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from "react";
import { EditorState } from "@codemirror/state";
import { EditorView, keymap } from "@codemirror/view";
import { defaultKeymap } from "@codemirror/commands";
import { html } from "@codemirror/lang-html";
import { javascript } from "@codemirror/lang-javascript";
import { css } from "@codemirror/lang-css";
import "./frontendEditor.css"; // Import your custom CSS here

const FullStackEditor = () => {
  const [htmlCode, setHtmlCode] = useState("<h1>Hello, World!</h1>");
  const [cssCode, setCssCode] = useState("h1 { color: blue; }");
  const [jsCode, setJsCode] = useState("console.log('Hello from JS');");
  const [backendCode, setBackendCode] = useState(
    `const express = require('express');\nconst app = express();\n\napp.get('/', (req, res) => {\n  res.send('Hello from the server!');\n});\n\napp.listen(3000, () => {\n  console.log('Server is running');\n});`
  );

  const iframeRef = useRef(null);
  const editorRefHTML = useRef(null);
  const editorRefCSS = useRef(null);
  const editorRefJS = useRef(null);
  const editorRefBackend = useRef(null);

  useEffect(() => {
    const startStateHTML = EditorState.create({
      doc: htmlCode,
      extensions: [
        keymap.of(defaultKeymap),
        html(),
        EditorView.updateListener.of((update) => {
          if (update.docChanged) {
            setHtmlCode(update.state.doc.toString());
          }
        }),
      ],
    });

    const startStateCSS = EditorState.create({
      doc: cssCode,
      extensions: [
        keymap.of(defaultKeymap),
        css(),
        EditorView.updateListener.of((update) => {
          if (update.docChanged) {
            setCssCode(update.state.doc.toString());
          }
        }),
      ],
    });

    const startStateJS = EditorState.create({
      doc: jsCode,
      extensions: [
        keymap.of(defaultKeymap),
        javascript(),
        EditorView.updateListener.of((update) => {
          if (update.docChanged) {
            setJsCode(update.state.doc.toString());
          }
        }),
      ],
    });

    const startStateBackend = EditorState.create({
      doc: backendCode,
      extensions: [
        keymap.of(defaultKeymap),
        html(), // Use HTML language for the backend code editor
        EditorView.updateListener.of((update) => {
          if (update.docChanged) {
            setBackendCode(update.state.doc.toString());
          }
        }),
      ],
    });

    new EditorView({
      state: startStateHTML,
      parent: editorRefHTML.current,
    });
    new EditorView({
      state: startStateCSS,
      parent: editorRefCSS.current,
    });
    new EditorView({
      state: startStateJS,
      parent: editorRefJS.current,
    });
    new EditorView({
      state: startStateBackend,
      parent: editorRefBackend.current,
    });
  }, []); // Only run once when the component mounts

  // Function to run the front-end code
  const runFrontEndCode = () => {
    const code = `
      <html>
        <head>
          <style>${cssCode}</style>
        </head>
        <body>
          ${htmlCode}
          <script>${jsCode}</script>
        </body>
      </html>
    `;
    if (iframeRef.current) {
      iframeRef.current.srcdoc = code;
    }
  };

  // Function to run the back-end code (send to backend server)
  const runBackEndCode = async () => {
    try {
      const response = await fetch("http://localhost:3000/run-backend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ backendCode }),
      });
      const result = await response.json();
      alert(result.message); // Show response from backend execution
    } catch (error) {
      alert("Error running backend code: " + error.message);
    }
  };

  return (
    <div className="web-designing-container">
      <div className="content-box">
        <h1 className="main-heading">Full-Stack Development Editor</h1>
        <p className="description">
          Write HTML, CSS, JavaScript for the frontend and Node.js (Express) for the backend. Click "Run" to see the live output!
        </p>

        <div className="section">
          <h2 className="sub-heading">HTML Code</h2>
          <div ref={editorRefHTML} className="editor-container"></div>

          <h2 className="sub-heading">CSS Code</h2>
          <div ref={editorRefCSS} className="editor-container"></div>

          <h2 className="sub-heading">JavaScript Code</h2>
          <div ref={editorRefJS} className="editor-container"></div>

          <h2 className="sub-heading">Backend Code (Node.js/Express)</h2>
          <div ref={editorRefBackend} className="editor-container"></div>
        </div>

        <button className="learn-btn" onClick={runFrontEndCode}>
          Run Front-End Code
        </button>

        <button className="learn-btn" onClick={runBackEndCode}>
          Run Back-End Code
        </button>

        <iframe ref={iframeRef} className="output-frame" title="output"></iframe>
      </div>
    </div>
  );
};

export default FullStackEditor;
