// // import React, { useState } from "react";
// // import './webdesigning.css'
// // const WebDesignerVisualizer = () => {
// //     const [htmlCode, setHtmlCode] = useState("<h1>Hello, World!</h1>");
// //     const [cssCode, setCssCode] = useState("");
// //     const [finalOutput, setFinalOutput] = useState("");
// //     const [cssApplied, setCssApplied] = useState(false);

// //     const applyCss = () => {
// //         setCssApplied(true);
// //         let styledHtml = `<style>${cssCode}</style>${htmlCode}`;
// //         setFinalOutput(styledHtml);
// //     };

// //     return (
// //         <div className="container">
// //             <h1>Web Designing Visualizer</h1>
// //             <div className="visualization">
// //                 {/* HTML Input Box */}
// //                 <div className={`html-box ${cssApplied ? "active" : ""}`}>
// //                     <h2>HTML</h2>
// //                     <textarea
// //                         className="input-field"
// //                         value={htmlCode}
// //                         onChange={(e) => setHtmlCode(e.target.value)}
// //                     ></textarea>
// //                     <button className="submit-button" onClick={applyCss}>
// //                         Send to CSS →
// //                     </button>
// //                 </div>

// //                 {/* CSS Input Box */}
// //                 <div className={`css-box ${cssApplied ? "active" : ""}`}>
// //                     <h2>CSS</h2>
// //                     <textarea
// //                         className="input-field"
// //                         value={cssCode}
// //                         onChange={(e) => setCssCode(e.target.value)}
// //                     ></textarea>
// //                     <button className="submit-button" onClick={applyCss}>
// //                         Get Final Output →
// //                     </button>
// //                 </div>

// //                 {/* Output Box */}
// //                 <div className={`output-box ${cssApplied ? "css-applied css-active" : ""}`}>
// //                     <h2>Output</h2>
// //                     <iframe title="output" srcDoc={finalOutput}></iframe>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default WebDesignerVisualizer;


// import React, { useState } from "react";
// import "./webdesigning.css";

// const WebDesignerVisualizer = () => {
//     const [htmlCode, setHtmlCode] = useState("<h1>Hello, World!</h1>");
//     const [cssCode, setCssCode] = useState("");
//     const [finalOutput, setFinalOutput] = useState("");
//     const [cssApplied, setCssApplied] = useState(false);

//     const updateHtml = () => {
//         // HTML update karne ka function, CSS apply nahi karega
//         setFinalOutput(htmlCode);
//     };

//     const applyCss = () => {
//         setCssApplied(true);
//         let styledHtml = `<style>${cssCode}</style>${htmlCode}`;
//         setFinalOutput(styledHtml);
//     };

//     return (
//         <div className="container">
//             <h1>Web Designing Visualizer</h1>
//             <div className="visualization">
//                 {/* HTML Input Box */}
//                 <div className="html-box">
//                     <h2>HTML</h2>
//                     <textarea
//                         className="input-field"
//                         value={htmlCode}
//                         onChange={(e) => setHtmlCode(e.target.value)}
//                     ></textarea>
//                     <button className="submit-button" onClick={updateHtml}>
//                         Send to CSS →
//                     </button>
//                 </div>

//                 {/* CSS Input Box */}
//                 <div className={`css-box ${cssApplied ? "active" : ""}`}>
//                     <h2>CSS</h2>
//                     <textarea
//                         className="input-field"
//                         value={cssCode}
//                         onChange={(e) => setCssCode(e.target.value)}
//                     ></textarea>
//                     <button className="submit-button" onClick={applyCss}>
//                         Get Final Output →
//                     </button>
//                 </div>

//                 {/* Output Box */}
//                 <div className={`output-box ${cssApplied ? "css-applied css-active" : ""}`}>
//                     <h2>Output</h2>
//                     <iframe title="output" srcDoc={finalOutput}></iframe>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default WebDesignerVisualizer;


import React, { useState } from "react";
import "./webdesigning.css";

const WebDesignerVisualizer = () => {
    const [htmlCode, setHtmlCode] = useState("<h1>Hello, World!</h1>");
    const [cssCode, setCssCode] = useState("");
    const [finalOutput, setFinalOutput] = useState("");
    const [htmlApplied, setHtmlApplied] = useState(false);
    const [cssApplied, setCssApplied] = useState(false);

    const updateHtml = () => {
        setFinalOutput(htmlCode);
        setHtmlApplied(true);
        setCssApplied(false); // Ensure CSS isn't applied yet
    };

    const applyCss = () => {
        setCssApplied(true);
        let styledHtml = `<style>${cssCode}</style>${htmlCode}`;
        setFinalOutput(styledHtml);
    };

    return (
        <div className="container">
            <h1>Web Designing Visualizer</h1>
            <div className="visualization">
                {/* HTML Input Box */}
                <div className="html-box">
                    <h2>HTML</h2>
                    <textarea
                        className="input-field"
                        value={htmlCode}
                        onChange={(e) => setHtmlCode(e.target.value)}
                    ></textarea>
                    <button className="submit-button" onClick={updateHtml}>
                        Run HTML →
                    </button>
                    {htmlApplied && <p className="status-message">HTML Applied</p>}
                </div>

                {/* CSS Input Box */}
                <div className={`css-box ${cssApplied ? "active" : ""}`}>
                    <h2>CSS</h2>
                    <textarea
                        className="input-field"
                        value={cssCode}
                        onChange={(e) => setCssCode(e.target.value)}
                    ></textarea>
                    <button className="submit-button" onClick={applyCss}>
                        Get Final Output →
                    </button>
                    {cssApplied && <p className="status-message">CSS Applied</p>}
                </div>

                {/* Output Box */}
                <div className={`output-box ${cssApplied ? "css-applied css-active" : ""}`}>
                    <h2>Output</h2>
                    <iframe title="output" srcDoc={finalOutput}></iframe>
                </div>
            </div>
        </div>
    );
};

export default WebDesignerVisualizer;
