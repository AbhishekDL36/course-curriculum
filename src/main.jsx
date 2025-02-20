import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

const root = createRoot(document.getElementById('root'));  // Correctly using createRoot
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
