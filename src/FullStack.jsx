
// // // // eslint-disable-next-line no-unused-vars
// // // import React, { useState, useEffect, useRef } from "react";
// // // import { EditorState } from "@codemirror/state";
// // // import { EditorView, keymap } from "@codemirror/view";
// // // import { defaultKeymap } from "@codemirror/commands";
// // // import { html } from "@codemirror/lang-html";
// // // import { javascript } from "@codemirror/lang-javascript";
// // // import { css } from "@codemirror/lang-css";
// // // import "./frontendEditor.css";

// // // const FullStackEditor = () => {
// // //   const [htmlCode, setHtmlCode] = useState("<h1>Hello, World!</h1>");
// // //   const [cssCode, setCssCode] = useState("h1 { color: blue; }");
// // //   const [jsCode, setJsCode] = useState("console.log('Hello from JS');");
// // //   const [backendCode, setBackendCode] = useState(
// // //     `const express = require('express');\nconst app = express();\n\napp.get('/', (req, res) => {\n  res.send('Hello from the server!');\n});\n\napp.listen(3000, () => {\n  console.log('Server is running');\n});`
// // //   );

// // //   const iframeRef = useRef(null);
// // //   const editorRefHTML = useRef(null);
// // //   const editorRefCSS = useRef(null);
// // //   const editorRefJS = useRef(null);
// // //   const editorRefBackend = useRef(null);

// // //   useEffect(() => {
// // //     const startStateHTML = EditorState.create({
// // //       doc: htmlCode,
// // //       extensions: [
// // //         keymap.of(defaultKeymap),
// // //         html(),
// // //         EditorView.updateListener.of((update) => {
// // //           if (update.docChanged) {
// // //             setHtmlCode(update.state.doc.toString());
// // //           }
// // //         }),
// // //       ],
// // //     });

// // //     const startStateCSS = EditorState.create({
// // //       doc: cssCode,
// // //       extensions: [
// // //         keymap.of(defaultKeymap),
// // //         css(),
// // //         EditorView.updateListener.of((update) => {
// // //           if (update.docChanged) {
// // //             setCssCode(update.state.doc.toString());
// // //           }
// // //         }),
// // //       ],
// // //     });

// // //     const startStateJS = EditorState.create({
// // //       doc: jsCode,
// // //       extensions: [
// // //         keymap.of(defaultKeymap),
// // //         javascript(),
// // //         EditorView.updateListener.of((update) => {
// // //           if (update.docChanged) {
// // //             setJsCode(update.state.doc.toString());
// // //           }
// // //         }),
// // //       ],
// // //     });

// // //     const startStateBackend = EditorState.create({
// // //       doc: backendCode,
// // //       extensions: [
// // //         keymap.of(defaultKeymap),
// // //         html(), // Use HTML language for the backend code editor
// // //         EditorView.updateListener.of((update) => {
// // //           if (update.docChanged) {
// // //             setBackendCode(update.state.doc.toString());
// // //           }
// // //         }),
// // //       ],
// // //     });

// // //     new EditorView({
// // //       state: startStateHTML,
// // //       parent: editorRefHTML.current,
// // //     });
// // //     new EditorView({
// // //       state: startStateCSS,
// // //       parent: editorRefCSS.current,
// // //     });
// // //     new EditorView({
// // //       state: startStateJS,
// // //       parent: editorRefJS.current,
// // //     });
// // //     new EditorView({
// // //       state: startStateBackend,
// // //       parent: editorRefBackend.current,
// // //     });
// // //   }, []); // Only run once when the component mounts

// // //   // Function to run the front-end code
// // //   const runFrontEndCode = () => {
// // //     const code = `
// // //       <html>
// // //         <head>
// // //           <style>${cssCode}</style>
// // //         </head>
// // //         <body>
// // //           ${htmlCode}
// // //           <script>${jsCode}</script>
// // //         </body>
// // //       </html>
// // //     `;
// // //     if (iframeRef.current) {
// // //       iframeRef.current.srcdoc = code;
// // //     }
// // //   };

// // //   // Function to run the back-end code (send to backend server)
// // //   const runBackEndCode = async () => {
// // //     try {
// // //       const response = await fetch("http://localhost:3000/run-backend", {
// // //         method: "POST",
// // //         headers: {
// // //           "Content-Type": "application/json",
// // //         },
// // //         body: JSON.stringify({ backendCode }),
// // //       });
// // //       const result = await response.json();
// // //       alert(result.message); // Show response from backend execution
// // //     } catch (error) {
// // //       alert("Error running backend code: " + error.message);
// // //     }
// // //   };

// // //   return (
// // //     <div className="web-designing-container">
// // //       <div className="content-box">
// // //         <h1 className="main-heading">Full-Stack Development Editor</h1>
// // //         <p className="description">
// // //           Write HTML, CSS, JavaScript for the frontend and Node.js (Express) for the backend. Click "Run" to see the live output!
// // //         </p>

// // //         <div className="section">
// // //           <h2 className="sub-heading">HTML Code</h2>
// // //           <div ref={editorRefHTML} className="editor-container"></div>

// // //           <h2 className="sub-heading">CSS Code</h2>
// // //           <div ref={editorRefCSS} className="editor-container"></div>

// // //           <h2 className="sub-heading">JavaScript Code</h2>
// // //           <div ref={editorRefJS} className="editor-container"></div>

// // //           <h2 className="sub-heading">Backend Code (Node.js/Express)</h2>
// // //           <div ref={editorRefBackend} className="editor-container"></div>
// // //         </div>

// // //         <button className="learn-btn" onClick={runFrontEndCode}>
// // //           Run Front-End Code
// // //         </button>

// // //         <button className="learn-btn" onClick={runBackEndCode}>
// // //           Run Back-End Code
// // //         </button>

// // //         <iframe ref={iframeRef} className="output-frame" title="output"></iframe>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default FullStackEditor;


// // import React, { useState, useEffect, useRef } from "react";
// // import { EditorState } from "@codemirror/state";
// // import { EditorView, keymap } from "@codemirror/view";
// // import { defaultKeymap } from "@codemirror/commands";
// // import { html } from "@codemirror/lang-html";
// // import { javascript } from "@codemirror/lang-javascript";
// // import { css } from "@codemirror/lang-css";
// // import "./frontendEditor.css";

// // const FullStackEditor = () => {
// //   const [htmlCode, setHtmlCode] = useState("<h1>Hello, World!</h1>");
// //   const [cssCode, setCssCode] = useState("h1 { color: blue; }");
// //   const [jsCode, setJsCode] = useState("console.log('Hello from JS');");
// //   const [fakeBackendResponse, setFakeBackendResponse] = useState("");

// //   const iframeRef = useRef(null);
// //   const editorRefHTML = useRef(null);
// //   const editorRefCSS = useRef(null);
// //   const editorRefJS = useRef(null);

// //   useEffect(() => {
// //     const startStateHTML = EditorState.create({
// //       doc: htmlCode,
// //       extensions: [
// //         keymap.of(defaultKeymap),
// //         html(),
// //         EditorView.updateListener.of((update) => {
// //           if (update.docChanged) {
// //             setHtmlCode(update.state.doc.toString());
// //           }
// //         }),
// //       ],
// //     });

// //     const startStateCSS = EditorState.create({
// //       doc: cssCode,
// //       extensions: [
// //         keymap.of(defaultKeymap),
// //         css(),
// //         EditorView.updateListener.of((update) => {
// //           if (update.docChanged) {
// //             setCssCode(update.state.doc.toString());
// //           }
// //         }),
// //       ],
// //     });

// //     const startStateJS = EditorState.create({
// //       doc: jsCode,
// //       extensions: [
// //         keymap.of(defaultKeymap),
// //         javascript(),
// //         EditorView.updateListener.of((update) => {
// //           if (update.docChanged) {
// //             setJsCode(update.state.doc.toString());
// //           }
// //         }),
// //       ],
// //     });

// //     new EditorView({
// //       state: startStateHTML,
// //       parent: editorRefHTML.current,
// //     });
// //     new EditorView({
// //       state: startStateCSS,
// //       parent: editorRefCSS.current,
// //     });
// //     new EditorView({
// //       state: startStateJS,
// //       parent: editorRefJS.current,
// //     });
// //   }, []); // Only run once when the component mounts

// //   // Function to run the front-end code
// //   const runFrontEndCode = () => {
// //     const code = `
// //       <html>
// //         <head>
// //           <style>${cssCode}</style>
// //         </head>
// //         <body>
// //           ${htmlCode}
// //           <script>${jsCode}</script>
// //         </body>
// //       </html>
// //     `;
// //     if (iframeRef.current) {
// //       iframeRef.current.srcdoc = code;
// //     }
// //   };

// //   // Fake backend function
// //   const runFakeBackend = () => {
// //     setFakeBackendResponse("⏳ Processing request...");
// //     setTimeout(() => {
// //       setFakeBackendResponse(
// //         `✅ Response: { "name": "John Doe", "age": ${Math.floor(
// //           Math.random() * 30 + 20
// //         )} }`
// //       );
// //     }, 2000);
// //   };

// //   return (
// //     <div className="web-designing-container">
// //       <div className="content-box">
// //         <h1 className="main-heading">Frontend Development Editor</h1>
// //         <p className="description">
// //           Write HTML, CSS, and JavaScript code and see the live output instantly!
// //         </p>

// //         <div className="section">
// //           <h2 className="sub-heading">HTML Code</h2>
// //           <div ref={editorRefHTML} className="editor-container"></div>

// //           <h2 className="sub-heading">CSS Code</h2>
// //           <div ref={editorRefCSS} className="editor-container"></div>

// //           <h2 className="sub-heading">JavaScript Code</h2>
// //           <div ref={editorRefJS} className="editor-container"></div>
// //         </div>

// //         <button className="learn-btn" onClick={runFrontEndCode}>
// //           Run Front-End Code
// //         </button>

// //         <button className="learn-btn" onClick={runFakeBackend}>
// //           Run "Backend" Simulation
// //         </button>

// //         <p className="backend-response">{fakeBackendResponse}</p>

// //         <iframe ref={iframeRef} className="output-frame" title="output"></iframe>
// //       </div>
// //     </div>
// //   );
// // };

// // export default FullStackEditor;


// // eslint-disable-next-line no-unused-vars
// import React, { useState, useEffect, useRef } from "react";
// import { EditorState } from "@codemirror/state";
// import { EditorView, keymap } from "@codemirror/view";
// import { defaultKeymap } from "@codemirror/commands";
// import { html } from "@codemirror/lang-html";
// import { javascript } from "@codemirror/lang-javascript";
// import { css } from "@codemirror/lang-css";
// import "./frontendEditor.css";

// const FullStackEditor = () => {
//   const [htmlCode, setHtmlCode] = useState("<h1>Hello, World!</h1>");
//   const [cssCode, setCssCode] = useState("h1 { color: blue; }");
//   const [jsCode, setJsCode] = useState("console.log('Hello from JS');");
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
//         html(), // Using HTML extension for simplicity
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
//   }, []); // Runs only once when the component mounts

//   // Function to run the front-end code
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

//   // Function to show backend code as JSON
//   const showBackendCodeAsJson = () => {
//     const backendJson = JSON.stringify({ backendCode }, null, 2);
//     alert(backendJson); // Alert me show karega backend ka JSON
//   };

//   return (
//     <div className="web-designing-container">
//       <div className="content-box">
//         <h1 className="main-heading">Full-Stack Development Editor</h1>
//         <p className="description">
//           Write HTML, CSS, JavaScript for the frontend and view your backend code in JSON format!
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

//           {/* Backend Code JSON Output */}
//           <h2 className="sub-heading">Backend Code (JSON Format)</h2>
//           <div className="json-output">
//             <pre>{JSON.stringify({ backendCode }, null, 2)}</pre>
//           </div>
//         </div>

//         <button className="learn-btn" onClick={runFrontEndCode}>
//           Run Front-End Code
//         </button>

//         <button className="learn-btn" onClick={showBackendCodeAsJson}>
//           Show Backend Code as JSON
//         </button>

//         <iframe ref={iframeRef} className="output-frame" title="output"></iframe>
//       </div>
//     </div>
//   );
// };

// export default FullStackEditor;


import React, { useState, useRef } from "react";
import { EditorState } from "@codemirror/state";
import { EditorView, keymap } from "@codemirror/view";
import { defaultKeymap } from "@codemirror/commands";
import { html } from "@codemirror/lang-html";
import "./frontendEditor.css";

const FullStackEditor = () => {
  const [htmlCode, setHtmlCode] = useState("<h1>Hello, World!</h1>");
  const [cssCode, setCssCode] = useState("h1 { color: blue; }");
  const [jsCode, setJsCode] = useState("console.log('Hello from JS');");
  const [backendName, setBackendName] = useState("Guest User"); // Default Name

  const iframeRef = useRef(null);
  const editorRefHTML = useRef(null);

  // Initialize CodeMirror Editor
  React.useEffect(() => {
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

    new EditorView({
      state: startStateHTML,
      parent: editorRefHTML.current,
    });
  }, []);

  // Run Front-End Code
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

  // Fake Backend Call
  const runBackEndCode = () => {
    const fakeBackendData = prompt("Enter your name for backend:") || "Guest User";
    setBackendName(fakeBackendData);
  };

  return (
    <div className="web-designing-container">
      <div className="content-box">
        <h1 className="main-heading">Full-Stack Development Editor</h1>
        <p className="description">Write HTML, CSS, and JavaScript. Click "Run" to see the live output!</p>

        <h2 className="sub-heading">HTML Code</h2>
        <div ref={editorRefHTML} className="editor-container"></div>

        <button className="learn-btn" onClick={runFrontEndCode}>Run Front-End Code</button>
        <button className="learn-btn" onClick={runBackEndCode}>Send Name to Backend</button>

        {/* Backend Name Display */}
        <div className="backend-name-display">Backend Name: {backendName}</div>

        <iframe ref={iframeRef} className="output-frame" title="output"></iframe>
      </div>
    </div>
  );
};

export default FullStackEditor;
