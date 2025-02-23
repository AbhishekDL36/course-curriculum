


// eslint-disable-next-line no-unused-vars
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
