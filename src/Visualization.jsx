


import React, { useState } from "react";
import { motion } from "framer-motion";
import "./visualisation.css";

const FormToDBVisualization = () => {
  const [submittedData, setSubmittedData] = useState(null);
  const [serverData, setServerData] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showDatabase, setShowDatabase] = useState(false);
  const [animateLine, setAnimateLine] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setShowDatabase(false);
    setAnimateLine(false);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
    };

    setServerData(formData); // Show data in server box

    setTimeout(() => {
      setAnimateLine(true); // Start moving data to database
    }, 1500);

    setTimeout(() => {
      setSubmittedData(formData);
      setShowDatabase(true);
      setServerData(null);
      setIsProcessing(false);
      setAnimateLine(false);
    }, 3000);
  };

  return (
    <div className="container">
      {/* Form Box */}
      <motion.div className="form-container" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h2>Fill the Form</h2>
        <form onSubmit={handleSubmit} className="form">
          <input type="text" name="name" placeholder="Enter Name" required />
          <input type="email" name="email" placeholder="Enter Email" required />
          <button type="submit">Submit</button>
        </form>
      </motion.div>

      {/* Server Box */}
      {serverData && (
        <motion.div className="server-box" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <h3>📡 Server</h3>
          <p><strong>Name:</strong> {serverData.name}</p>
          <p><strong>Email:</strong> {serverData.email}</p>
          <p className="processing">Processing...</p>
        </motion.div>
      )}

      {/* Animated Line (Server to Database) */}
      {animateLine && <motion.div className="line" initial={{ width: "0%" }} animate={{ width: "50%" }} transition={{ duration: 1 }}></motion.div>}

      {/* Database Box */}
      {showDatabase && submittedData && (
        <motion.div className="database-entry" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
          <h3>📂 Database</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
        </motion.div>
      )}
    </div>
  );
};

export default FormToDBVisualization;
