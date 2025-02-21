import React from 'react';

const WebDesigning = () => {
  return (
    <div className="web-designing-page bg-aqua text-black p-6">
      <h1 className="text-4xl font-bold mb-4">Web Designing</h1>
      <p className="text-lg mb-4">
        Web designing is the process of creating websites using HTML & CSS.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6">What is HTML?</h2>
      <p className="mb-2">HTML (HyperText Markup Language) is used to structure web pages.</p>
      <pre className="bg-gray-200 p-4 rounded"><code>{`<h1>Hello World</h1>`}</code></pre>
      
      <h2 className="text-2xl font-semibold mt-6">What is CSS?</h2>
      <p className="mb-2">CSS (Cascading Style Sheets) is used to style web pages.</p>
      <pre className="bg-gray-200 p-4 rounded"><code>{`h1 { color: blue; }`}</code></pre>
      
      <p className="mt-6">Mastering HTML & CSS is the first step to becoming a great web designer!</p>
    </div>
  );
};

export default WebDesigning;