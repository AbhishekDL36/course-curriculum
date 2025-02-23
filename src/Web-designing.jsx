


// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, useRef } from "react";
import "./webdesigning.css";
import { EditorState } from "@codemirror/state";
import { EditorView, keymap } from "@codemirror/view";
import { defaultKeymap } from "@codemirror/commands";
import { html } from "@codemirror/lang-html";

const WebDesigning = () => {
  const [code, setCode] = useState(
    `<h1>Hello World</h1>\n<style>h1 { color: red; }</style>`
  );
  const iframeRef = useRef(null);
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      const startState = EditorState.create({
        doc: code,
        extensions: [
          keymap.of(defaultKeymap),
          html(),
          EditorView.updateListener.of((update) => {
            if (update.docChanged) {
              setCode(update.state.doc.toString());
            }
          }),
        ],
      });

      new EditorView({
        state: startState,
        parent: editorRef.current,
      });
    }
  }, []);

  const runCode = () => {
    if (iframeRef.current) {
      iframeRef.current.srcdoc = code; 
    }
  };

  return (
    <div className="web-designing-container">
      <div className="content-box">
        <h1 className="main-heading">Web Designing</h1>
        <p className="description">
          Web designing is the process of creating websites using{" "}
          <span className="highlight-html">HTML</span> &{" "}
          <span className="highlight-css">CSS</span>. It involves layout, color
          schemes, typography, and responsive design to enhance user experience.
        </p>

        <div className="section">
          <h2 className="sub-heading">What is HTML?</h2>
          <p className="text">
            HTML (HyperText Markup Language) is used to structure and layout web
            pages.
          </p>
          <pre className="code-block">
            <code>{`<h1>Hello World</h1>`}</code>
          </pre>

          <h2 className="sub-heading">What is CSS?</h2>
          <p className="text">
            CSS (Cascading Style Sheets) is used to style web pages.
          </p>
          <pre className="code-block">
            <code>{`h1 { color: blue; font-size: 24px; text-align: center; }`}</code>
          </pre>
        </div>

        <p className="final-text">
          Mastering HTML & CSS is the first step to becoming a great web
          designer! 🎨
        </p>
     

      
        <h2 className="sub-heading">Try It Yourself 👇</h2>
        <div ref={editorRef} className="editor-container"></div>
        <button className="learn-btn" onClick={runCode}>
          Run Code
        </button>

 
        <iframe ref={iframeRef} className="output-frame"></iframe>
      </div>
    </div>
  );
};

export default WebDesigning;