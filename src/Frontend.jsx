// // // // // // // eslint-disable-next-line no-unused-vars
// // // // // // import React, { useEffect, useState, useRef } from "react";
// // // // // // import { EditorState } from "@codemirror/state";
// // // // // // import { EditorView, keymap } from "@codemirror/view";
// // // // // // import { defaultKeymap } from "@codemirror/commands";
// // // // // // import { html } from "@codemirror/lang-html";
// // // // // // import { javascript } from "@codemirror/lang-javascript";
// // // // // // import { css } from "@codemirror/lang-css";
// // // // // // import "./webdesigning.css";
 
// // // // // // const FrontEndEditor = () => {
// // // // // //   const [htmlCode, setHtmlCode] = useState(
// // // // // //     `<h1 id="hello">Hello World</h1>\n<button onclick="changeText()">Click me!</button>\n`
// // // // // //   );
// // // // // //   const [cssCode, setCssCode] = useState(
// // // // // //     `#hello { color: red; font-size: 50px; text-align: center; }`
// // // // // //   );
// // // // // //   const [jsCode, setJsCode] = useState(
// // // // // //     `function changeText() { document.getElementById('hello').innerText = 'You clicked the button!'; }`
// // // // // //   );
// // // // // //   const iframeRef = useRef(null);
// // // // // //   const editorRefHTML = useRef(null);
// // // // // //   const editorRefCSS = useRef(null);
// // // // // //   const editorRefJS = useRef(null);

// // // // // //   useEffect(() => {
// // // // // //     const startStateHTML = EditorState.create({
// // // // // //       doc: htmlCode,
// // // // // //       extensions: [
// // // // // //         keymap.of(defaultKeymap),
// // // // // //         html(),
// // // // // //         EditorView.updateListener.of((update) => {
// // // // // //           if (update.docChanged) {
// // // // // //             setHtmlCode(update.state.doc.toString());
// // // // // //           }
// // // // // //         }),
// // // // // //       ],
// // // // // //     });

// // // // // //     const startStateCSS = EditorState.create({
// // // // // //       doc: cssCode,
// // // // // //       extensions: [
// // // // // //         keymap.of(defaultKeymap),
// // // // // //         css(),
// // // // // //         EditorView.updateListener.of((update) => {
// // // // // //           if (update.docChanged) {
// // // // // //             setCssCode(update.state.doc.toString());
// // // // // //           }
// // // // // //         }),
// // // // // //       ],
// // // // // //     });

// // // // // //     const startStateJS = EditorState.create({
// // // // // //       doc: jsCode,
// // // // // //       extensions: [
// // // // // //         keymap.of(defaultKeymap),
// // // // // //         javascript(),
// // // // // //         EditorView.updateListener.of((update) => {
// // // // // //           if (update.docChanged) {
// // // // // //             setJsCode(update.state.doc.toString());
// // // // // //           }
// // // // // //         }),
// // // // // //       ],
// // // // // //     });

// // // // // //     new EditorView({
// // // // // //       state: startStateHTML,
// // // // // //       parent: editorRefHTML.current,
// // // // // //     });
// // // // // //     new EditorView({
// // // // // //       state: startStateCSS,
// // // // // //       parent: editorRefCSS.current,
// // // // // //     });
// // // // // //     new EditorView({
// // // // // //       state: startStateJS,
// // // // // //       parent: editorRefJS.current,
// // // // // //     });
// // // // // //   }, [htmlCode, cssCode, jsCode]);

// // // // // //   const runCode = () => {
// // // // // //     const code = `
// // // // // //       <html>
// // // // // //         <head>
// // // // // //           <style>${cssCode}</style>
// // // // // //         </head>
// // // // // //         <body>
// // // // // //           ${htmlCode}
// // // // // //           <script>${jsCode}</script>
// // // // // //         </body>
// // // // // //       </html>
// // // // // //     `;
// // // // // //     if (iframeRef.current) {
// // // // // //       iframeRef.current.srcdoc = code;
// // // // // //     }
// // // // // //   };

// // // // // // return (
// // // // // //     <div className="web-designing-container">
// // // // // //       <div className="content-box">
// // // // // //         <h1 className="main-heading">Front-End Code Editor</h1>
// // // // // //         <p className="description">
// // // // // //           Write HTML, CSS, and JavaScript in the editors below and click
// // // // // //           "Run Code" to see the live output!
// // // // // //         </p>

// // // // // //         <div className="section">
// // // // // //           <h2 className="sub-heading">HTML Code</h2>
// // // // // //           <div ref={editorRefHTML} className="editor-container"></div>

// // // // // //           <h2 className="sub-heading">CSS Code</h2>
// // // // // //           <div ref={editorRefCSS} className="editor-container"></div>

// // // // // //           <h2 className="sub-heading">JavaScript Code</h2>
// // // // // //           <div ref={editorRefJS} className="editor-container"></div>
// // // // // //         </div>

// // // // // //         <button className="learn-btn" onClick={runCode}>
// // // // // //           Run Code
// // // // // //         </button>

// // // // // //         <iframe ref={iframeRef} className="output-frame"></iframe>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default FrontEndEditor;



// // // // // // eslint-disable-next-line no-unused-vars
// // // // // import React, { useEffect, useState, useRef } from "react";
// // // // // import { EditorState } from "@codemirror/state";
// // // // // import { EditorView, keymap } from "@codemirror/view";
// // // // // import { defaultKeymap } from "@codemirror/commands";
// // // // // import { html } from "@codemirror/lang-html";
// // // // // import { javascript } from "@codemirror/lang-javascript";
// // // // // import { css } from "@codemirror/lang-css";
// // // // // import "./webdesigning.css";

// // // // // const FrontEndEditor = () => {
// // // // //   const [htmlCode, setHtmlCode] = useState(
// // // // //     `<h1 id="hello">Hello World</h1>\n<button onclick="changeText()">Click me!</button>\n`
// // // // //   );
// // // // //   const [cssCode, setCssCode] = useState(
// // // // //     `#hello { color: red; font-size: 50px; text-align: center; }`
// // // // //   );
// // // // //   const [jsCode, setJsCode] = useState(
// // // // //     `function changeText() { document.getElementById('hello').innerText = 'You clicked the button!'; }`
// // // // //   );
// // // // //   const iframeRef = useRef(null);
// // // // //   const editorRefHTML = useRef(null);
// // // // //   const editorRefCSS = useRef(null);
// // // // //   const editorRefJS = useRef(null);

// // // // //   useEffect(() => {
// // // // //     const startStateHTML = EditorState.create({
// // // // //       doc: htmlCode,
// // // // //       extensions: [
// // // // //         keymap.of(defaultKeymap),
// // // // //         html(),
// // // // //         EditorView.updateListener.of((update) => {
// // // // //           if (update.docChanged) {
// // // // //             setHtmlCode(update.state.doc.toString());
// // // // //           }
// // // // //         }),
// // // // //       ],
// // // // //     });

// // // // //     const startStateCSS = EditorState.create({
// // // // //       doc: cssCode,
// // // // //       extensions: [
// // // // //         keymap.of(defaultKeymap),
// // // // //         css(),
// // // // //         EditorView.updateListener.of((update) => {
// // // // //           if (update.docChanged) {
// // // // //             setCssCode(update.state.doc.toString());
// // // // //           }
// // // // //         }),
// // // // //       ],
// // // // //     });

// // // // //     const startStateJS = EditorState.create({
// // // // //       doc: jsCode,
// // // // //       extensions: [
// // // // //         keymap.of(defaultKeymap),
// // // // //         javascript(),
// // // // //         EditorView.updateListener.of((update) => {
// // // // //           if (update.docChanged) {
// // // // //             setJsCode(update.state.doc.toString());
// // // // //           }
// // // // //         }),
// // // // //       ],
// // // // //     });

// // // // //     new EditorView({
// // // // //       state: startStateHTML,
// // // // //       parent: editorRefHTML.current,
// // // // //     });
// // // // //     new EditorView({
// // // // //       state: startStateCSS,
// // // // //       parent: editorRefCSS.current,
// // // // //     });
// // // // //     new EditorView({
// // // // //       state: startStateJS,
// // // // //       parent: editorRefJS.current,
// // // // //     });
// // // // //   }, [htmlCode, cssCode, jsCode]);

// // // // //   const runCode = () => {
// // // // //     const code = `
// // // // //       <html>
// // // // //         <head>
// // // // //           <style>${cssCode}</style>
// // // // //         </head>
// // // // //         <body>
// // // // //           ${htmlCode}
// // // // //           <script>${jsCode}</script>
// // // // //         </body>
// // // // //       </html>
// // // // //     `;
// // // // //     if (iframeRef.current) {
// // // // //       iframeRef.current.srcdoc = code;
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="web-designing-container">
// // // // //       <div className="content-box">
// // // // //         <h1 className="main-heading">Front-End Code Editor</h1>
// // // // //         <p className="description">
// // // // //           Write HTML, CSS, and JavaScript in the editors below and click
// // // // //           "Run Code" to see the live output!
// // // // //         </p>

// // // // //         <div className="section">
// // // // //           <h2 className="sub-heading">HTML Code</h2>
// // // // //           <div ref={editorRefHTML} className="editor-container"></div>

// // // // //           <h2 className="sub-heading">CSS Code</h2>
// // // // //           <div ref={editorRefCSS} className="editor-container"></div>

// // // // //           <h2 className="sub-heading">JavaScript Code</h2>
// // // // //           <div ref={editorRefJS} className="editor-container"></div>
// // // // //         </div>

// // // // //         <button className="learn-btn" onClick={runCode}>
// // // // //           Run Code
// // // // //         </button>

// // // // //         <iframe ref={iframeRef} className="output-frame" title="output"></iframe>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default FrontEndEditor;



// // // // // eslint-disable-next-line no-unused-vars
// // // // import React, { useEffect, useState, useRef } from "react";
// // // // import { EditorState } from "@codemirror/state";
// // // // import { EditorView, keymap } from "@codemirror/view";
// // // // import { defaultKeymap } from "@codemirror/commands";
// // // // import { html } from "@codemirror/lang-html";
// // // // import { javascript } from "@codemirror/lang-javascript";
// // // // import { css } from "@codemirror/lang-css";
// // // // import "./frontendEditor.css";  // Import your CSS file here

// // // // const FrontEndEditor = () => {
// // // //   const [htmlCode, setHtmlCode] = useState(
// // // //     `<h1 id="hello">Hello World</h1>\n<button onclick="changeText()">Click me!</button>\n`
// // // //   );
// // // //   const [cssCode, setCssCode] = useState(
// // // //     `#hello { color: red; font-size: 50px; text-align: center; }`
// // // //   );
// // // //   const [jsCode, setJsCode] = useState(
// // // //     `function changeText() { document.getElementById('hello').innerText = 'You clicked the button!'; }`
// // // //   );
  
// // // //   const iframeRef = useRef(null);
// // // //   const editorRefHTML = useRef(null);
// // // //   const editorRefCSS = useRef(null);
// // // //   const editorRefJS = useRef(null);

// // // //   useEffect(() => {
// // // //     const startStateHTML = EditorState.create({
// // // //       doc: htmlCode,
// // // //       extensions: [
// // // //         keymap.of(defaultKeymap),
// // // //         html(),
// // // //         EditorView.updateListener.of((update) => {
// // // //           if (update.docChanged) {
// // // //             setHtmlCode(update.state.doc.toString());
// // // //           }
// // // //         }),
// // // //       ],
// // // //     });

// // // //     const startStateCSS = EditorState.create({
// // // //       doc: cssCode,
// // // //       extensions: [
// // // //         keymap.of(defaultKeymap),
// // // //         css(),
// // // //         EditorView.updateListener.of((update) => {
// // // //           if (update.docChanged) {
// // // //             setCssCode(update.state.doc.toString());
// // // //           }
// // // //         }),
// // // //       ],
// // // //     });

// // // //     const startStateJS = EditorState.create({
// // // //       doc: jsCode,
// // // //       extensions: [
// // // //         keymap.of(defaultKeymap),
// // // //         javascript(),
// // // //         EditorView.updateListener.of((update) => {
// // // //           if (update.docChanged) {
// // // //             setJsCode(update.state.doc.toString());
// // // //           }
// // // //         }),
// // // //       ],
// // // //     });

// // // //     new EditorView({
// // // //       state: startStateHTML,
// // // //       parent: editorRefHTML.current,
// // // //     });
// // // //     new EditorView({
// // // //       state: startStateCSS,
// // // //       parent: editorRefCSS.current,
// // // //     });
// // // //     new EditorView({
// // // //       state: startStateJS,
// // // //       parent: editorRefJS.current,
// // // //     });
// // // //   }, []);  // Only run once when the component mounts

// // // //   const runCode = () => {
// // // //     const code = `
// // // //       <html>
// // // //         <head>
// // // //           <style>${cssCode}</style>
// // // //         </head>
// // // //         <body>
// // // //           ${htmlCode}
// // // //           <script>${jsCode}</script>
// // // //         </body>
// // // //       </html>
// // // //     `;
// // // //     if (iframeRef.current) {
// // // //       iframeRef.current.srcdoc = code;
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="web-designing-container">
// // // //       <div className="content-box">
// // // //         <h1 className="main-heading">Front-End Development</h1>
// // // //         <p className="description">
// // // //           Write HTML, CSS, and JavaScript in the editors below and click
// // // //           "Run Code" to see the live output!
// // // //         </p>

// // // //         <div className="section">
// // // //           <h2 className="sub-heading">HTML Code</h2>
// // // //           <div ref={editorRefHTML} className="editor-container"></div>

// // // //           <h2 className="sub-heading">CSS Code</h2>
// // // //           <div ref={editorRefCSS} className="editor-container"></div>

// // // //           <h2 className="sub-heading">JavaScript Code</h2>
// // // //           <div ref={editorRefJS} className="editor-container"></div>
// // // //         </div>

// // // //         <button className="learn-btn" onClick={runCode}>
// // // //           Run Code
// // // //         </button>

// // // //         <iframe ref={iframeRef} className="output-frame"></iframe>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default FrontEndEditor;


// // // import React, { useEffect, useState, useRef } from "react";
// // // import { EditorState } from "@codemirror/state";
// // // import { EditorView, keymap } from "@codemirror/view";
// // // import { defaultKeymap } from "@codemirror/commands";
// // // import { html } from "@codemirror/lang-html";
// // // import { javascript } from "@codemirror/lang-javascript";
// // // import { css } from "@codemirror/lang-css";
// // // import "./frontendEditor.css";  // Import your CSS file here

// // // const FrontEndEditor = () => {
// // //   const [htmlCode, setHtmlCode] = useState(
// // //     `<h1 id="hello">Hello World</h1>\n<button onclick="changeText()">Click me!</button>\n`
// // //   );
// // //   const [cssCode, setCssCode] = useState(
// // //     `#hello { color: red; font-size: 50px; text-align: center; }`
// // //   );
// // //   const [jsCode, setJsCode] = useState(
// // //     `function changeText() { document.getElementById('hello').innerText = 'You clicked the button!'; }`
// // //   );

// // //   const iframeRef = useRef(null);
// // //   const editorRefHTML = useRef(null);
// // //   const editorRefCSS = useRef(null);
// // //   const editorRefJS = useRef(null);

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
// // //   }, []);  // Only run once when the component mounts

// // //   const runCode = () => {
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

// // //   return (
// // //     <div className="web-designing-container">
// // //       <div className="content-box">
// // //         <h1 className="main-heading">Front-End Development</h1>
// // //         <p className="description">
// // //           Write HTML, CSS, and JavaScript in the editors below and click
// // //           "Run Code" to see the live output!
// // //         </p>

// // //         {/* What is Front-End Section */}
// // //         <div className="info-section">
// // //           <h2 className="info-heading">What is Front-End Web Development?</h2>
// // //           <p className="info-content">
// // //             Front-End Web Development refers to the part of web development that focuses on creating the visual and interactive aspects of a website. It involves working on the elements that users directly interact with, such as layouts, buttons, navigation menus, forms, and animations. Essentially, front-end developers are responsible for designing and implementing the user interface (UI) and user experience (UX).
// // //           </p>
// // //           <h3 className="info-subheading">Key Technologies Used in Front-End Development</h3>
// // //           <ul className="tech-list">
// // //             <li><strong>HTML (HyperText Markup Language):</strong> This is the backbone of any web page. It defines the structure and content, such as text, images, and videos.</li>
// // //             <li><strong>CSS (Cascading Style Sheets):</strong> This technology is used to style the web page. It controls the layout, design, and appearance of elements on the page, including colors, fonts, spacing, and more.</li>
// // //             <li><strong>JavaScript:</strong> JavaScript brings interactivity to a web page. It allows front-end developers to create dynamic content, manage user inputs, perform calculations, and even make asynchronous requests to a server (AJAX).</li>
// // //             <li><strong>Responsive Design:</strong> Using CSS and JavaScript, front-end developers ensure that websites work well on various devices like desktops, tablets, and mobile phones, adjusting the layout and design based on the screen size.</li>
// // //             <li><strong>Frameworks and Libraries:</strong> Popular libraries like <strong>React.js</strong>, <strong>Angular</strong>, and <strong>Vue.js</strong> help streamline development and build more complex applications with less code.</li>
// // //           </ul>
// // //         </div>

// // //         <div className="section">
// // //           <h2 className="sub-heading">HTML Code</h2>
// // //           <div ref={editorRefHTML} className="editor-container"></div>

// // //           <h2 className="sub-heading">CSS Code</h2>
// // //           <div ref={editorRefCSS} className="editor-container"></div>

// // //           <h2 className="sub-heading">JavaScript Code</h2>
// // //           <div ref={editorRefJS} className="editor-container"></div>
// // //         </div>

// // //         <button className="learn-btn" onClick={runCode}>
// // //           Run Code
// // //         </button>

// // //         <iframe ref={iframeRef} className="output-frame" title="output"></iframe>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default FrontEndEditor;




// // import React, { useEffect, useState, useRef } from "react";
// // import { EditorState } from "@codemirror/state";
// // import { EditorView, keymap } from "@codemirror/view";
// // import { defaultKeymap } from "@codemirror/commands";
// // import { html } from "@codemirror/lang-html";
// // import { javascript } from "@codemirror/lang-javascript";
// // import { css } from "@codemirror/lang-css";
// // import "./frontendEditor.css"; // Import your CSS file here

// // const FrontEndEditor = () => {
// //   const [htmlCode, setHtmlCode] = useState(
// //     `<h1 id="hello">Hello World</h1>\n<button onclick="changeText()">Click me!</button>\n`
// //   );
// //   const [cssCode, setCssCode] = useState(
// //     `#hello { color: red; font-size: 50px; text-align: center; }`
// //   );
// //   const [jsCode, setJsCode] = useState(
// //     `function changeText() { document.getElementById('hello').innerText = 'You clicked the button!'; }`
// //   );

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

// //   const runCode = () => {
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

// //   return (
// //     <div className="web-designing-container">
// //       <div className="content-box">
// //         <h1 className="main-heading">Front-End Development</h1>
// //         <p className="description">
// //           Write HTML, CSS, and JavaScript in the editors below and click
// //           "Run Code" to see the live output!
// //         </p>

// //         {/* Visual Information Section */}
// //         <div className="info-section">
// //           <h2 className="info-heading">What is Front-End Web Development?</h2>
// //           <div className="visual-info-container">
// //             <div className="visual-info">
// //               <img src="/path/to/front-end-icon.png" alt="Front-End Icon" className="icon" />
// //               <p>
// //                 Front-End Development is the creation of the visual and interactive aspects of a website that users see and interact with directly.
// //                 <br />
// //                 It includes everything that users experience on the web: content, images, buttons, text, and animations.
// //               </p>
// //             </div>
// //             <div className="visual-info">
// //               <img src="/path/to/technology-icon.png" alt="Technologies" className="icon" />
// //               <p>
// //                 Front-End uses technologies like HTML, CSS, JavaScript, and frameworks like React, Angular, and Vue to build responsive and interactive websites.
// //               </p>
// //             </div>
// //           </div>

// //           <h3 className="info-subheading">Key Technologies in Front-End Development:</h3>
// //           <div className="tech-icons">
// //             <div className="tech-icon">
// //               <img src="/path/to/html-icon.png" alt="HTML" className="tech-icon-img" />
// //               <p>HTML</p>
// //             </div>
// //             <div className="tech-icon">
// //               <img src="/path/to/css-icon.png" alt="CSS" className="tech-icon-img" />
// //               <p>CSS</p>
// //             </div>
// //             <div className="tech-icon">
// //               <img src="/path/to/js-icon.png" alt="JavaScript" className="tech-icon-img" />
// //               <p>JavaScript</p>
// //             </div>
// //             <div className="tech-icon">
// //               <img src="/path/to/react-icon.png" alt="React" className="tech-icon-img" />
// //               <p>React</p>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="section">
// //           <h2 className="sub-heading">HTML Code</h2>
// //           <div ref={editorRefHTML} className="editor-container"></div>

// //           <h2 className="sub-heading">CSS Code</h2>
// //           <div ref={editorRefCSS} className="editor-container"></div>

// //           <h2 className="sub-heading">JavaScript Code</h2>
// //           <div ref={editorRefJS} className="editor-container"></div>
// //         </div>

// //         <button className="learn-btn" onClick={runCode}>
// //           Run Code
// //         </button>

// //         <iframe ref={iframeRef} className="output-frame" title="output"></iframe>
// //       </div>
// //     </div>
// //   );
// // };

// // export default FrontEndEditor;


// import React, { useEffect, useState, useRef } from "react";
// import { EditorState } from "@codemirror/state";
// import { EditorView, keymap } from "@codemirror/view";
// import { defaultKeymap } from "@codemirror/commands";
// import { html } from "@codemirror/lang-html";
// import { javascript } from "@codemirror/lang-javascript";
// import { css } from "@codemirror/lang-css";
// import "./frontendEditor.css"; // Import your CSS file here

// const FrontEndEditor = () => {
//   const [htmlCode, setHtmlCode] = useState(
//     `<h1 id="hello">Hello World</h1>\n<button onclick="changeText()">Click me!</button>\n`
//   );
//   const [cssCode, setCssCode] = useState(
//     `#hello { color: red; font-size: 50px; text-align: center; }`
//   );
//   const [jsCode, setJsCode] = useState(
//     `function changeText() { document.getElementById('hello').innerText = 'You clicked the button!'; }`
//   );

//   const iframeRef = useRef(null);
//   const editorRefHTML = useRef(null);
//   const editorRefCSS = useRef(null);
//   const editorRefJS = useRef(null);

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
//   }, []); // Only run once when the component mounts

//   const runCode = () => {
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

//   return (
//     <div className="web-designing-container">
//       <div className="content-box">
//         <h1 className="main-heading">Front-End Development</h1>
//         <p className="description">
//           Write HTML, CSS, and JavaScript in the editors below and click
//           "Run Code" to see the live output!
//         </p>

//         {/* Visual Information Section */}
//         <div className="info-section">
//           <h2 className="info-heading">What is Front-End Web Development?</h2>
//           <div className="visual-info-container">
//             <div className="visual-info">
//               <img src="/path/to/front-end-icon.png" alt="Front-End Icon" className="icon" />
//               <p>
//                 Front-End Development is the creation of the visual and interactive aspects of a website that users see and interact with directly.
//                 <br />
//                 It includes everything that users experience on the web: content, images, buttons, text, and animations.
//               </p>
//             </div>
//             <div className="visual-info">
//               <img src="/path/to/technology-icon.png" alt="Technologies" className="icon" />
//               <p>
//                 Front-End uses technologies like HTML, CSS, JavaScript, and frameworks like React, Angular, and Vue to build responsive and interactive websites.
//               </p>
//             </div>
//           </div>

//           <h3 className="info-subheading">Key Technologies in Front-End Development:</h3>
//           <div className="tech-icons">
//             <div className="tech-icon">
//               <img src="/path/to/html-icon.png" alt="HTML" className="tech-icon-img" />
//               <p>HTML</p>
//             </div>
//             <div className="tech-icon">
//               <img src="/path/to/css-icon.png" alt="CSS" className="tech-icon-img" />
//               <p>CSS</p>
//             </div>
//             <div className="tech-icon">
//               <img src="/path/to/js-icon.png" alt="JavaScript" className="tech-icon-img" />
//               <p>JavaScript</p>
//             </div>
//             <div className="tech-icon">
//               <img src="/path/to/react-icon.png" alt="React" className="tech-icon-img" />
//               <p>React</p>
//             </div>
//           </div>
//         </div>

//         <div className="section">
//           <h2 className="sub-heading">HTML Code</h2>
//           <div ref={editorRefHTML} className="editor-container"></div>

//           <h2 className="sub-heading">CSS Code</h2>
//           <div ref={editorRefCSS} className="editor-container"></div>

//           <h2 className="sub-heading">JavaScript Code</h2>
//           <div ref={editorRefJS} className="editor-container"></div>
//         </div>

//         <button className="learn-btn" onClick={runCode}>
//           Run Code
//         </button>

//         <iframe ref={iframeRef} className="output-frame" title="output"></iframe>
//       </div>
//     </div>
//   );
// };

// export default FrontEndEditor;



import React, { useEffect, useState, useRef } from "react";
import { EditorState } from "@codemirror/state";
import { EditorView, keymap } from "@codemirror/view";
import { defaultKeymap } from "@codemirror/commands";
import { html } from "@codemirror/lang-html";
import { javascript } from "@codemirror/lang-javascript";
import { css } from "@codemirror/lang-css";
import "./frontendEditor.css"; // Import your CSS file here

const FrontEndEditor = () => {
  const [htmlCode, setHtmlCode] = useState(
    `<h1 id="hello">Hello World</h1>\n<button onclick="changeText()">Click me!</button>\n`
  );
  const [cssCode, setCssCode] = useState(
    `#hello { color: red; font-size: 50px; text-align: center; }`
  );
  const [jsCode, setJsCode] = useState(
    `function changeText() { document.getElementById('hello').innerText = 'You clicked the button!'; }`
  );

  const iframeRef = useRef(null);
  const editorRefHTML = useRef(null);
  const editorRefCSS = useRef(null);
  const editorRefJS = useRef(null);

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
  }, []); // Only run once when the component mounts

  const runCode = () => {
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

  return (
    <div className="web-designing-container">
      <div className="content-box">
        <h1 className="main-heading">Front-End Development</h1>
        <p className="description">
          Write HTML, CSS, and JavaScript in the editors below and click
          "Run Code" to see the live output!
        </p>

        {/* Visual Information Section */}
        <div className="info-section">
          <h2 className="info-heading">What is Front-End Web Development?</h2>
          <div className="visual-info-container">
            <div className="visual-info">
              <i className="fas fa-code icon"></i>
              <p>
                Front-End Development is the creation of the visual and interactive aspects of a website that users see and interact with directly.
                <br />
                It includes everything that users experience on the web: content, images, buttons, text, and animations.
              </p>
            </div>
            <div className="visual-info">
              <i className="fas fa-tools icon"></i>
              <p>
                Front-End uses technologies like HTML, CSS, JavaScript, and frameworks like React, Angular, and Vue to build responsive and interactive websites.
              </p>
            </div>
          </div>

          <h3 className="info-subheading">Key Technologies in Front-End Development:</h3>
          <div className="tech-icons">
            <div className="tech-icon">
              <i className="fab fa-html5 tech-icon-img"></i>
              <p>HTML</p>
            </div>
            <div className="tech-icon">
              <i className="fab fa-css3-alt tech-icon-img"></i>
              <p>CSS</p>
            </div>
            <div className="tech-icon">
              <i className="fab fa-js tech-icon-img"></i>
              <p>JavaScript</p>
            </div>
            <div className="tech-icon">
              <i className="fab fa-react tech-icon-img"></i>
              <p>React</p>
            </div>
          </div>
        </div>

        <div className="section">
          <h2 className="sub-heading">HTML Code</h2>
          <div ref={editorRefHTML} className="editor-container"></div>

          <h2 className="sub-heading">CSS Code</h2>
          <div ref={editorRefCSS} className="editor-container"></div>

          <h2 className="sub-heading">JavaScript Code</h2>
          <div ref={editorRefJS} className="editor-container"></div>
        </div>

        <button className="learn-btn" onClick={runCode}>
          Run Code
        </button>

        <iframe ref={iframeRef} className="output-frame" title="output"></iframe>
      </div>
    </div>
  );
};

export default FrontEndEditor;
