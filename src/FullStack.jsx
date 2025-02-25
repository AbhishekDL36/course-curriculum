


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

    setServerData(formData);

    setTimeout(() => {
      setAnimateLine(true);
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
      <div className="visualization">
        <motion.div className="client-box" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h2>🖥️ Client</h2>
          <form onSubmit={handleSubmit} className="form">
            <input type="text" name="name" placeholder="Enter Name" required className="input-field" />
            <input type="email" name="email" placeholder="Enter Email" required className="input-field" />
            <button type="submit" className="submit-button">Send to Database</button>
          </form>
        </motion.div>

        {animateLine && <motion.div className="line" initial={{ width: "0%" }} animate={{ width: "50%" }} transition={{ duration: 1 }}></motion.div>}

        <motion.div className="server-box" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <h2>📡 Server</h2>
          {serverData ? (
            <>
              <p><strong>Name:</strong> {serverData.name}</p>
              <p><strong>Email:</strong> {serverData.email}</p>
              <p className="processing">Processing...</p>
            </>
          ) : <p>Waiting for data...</p>}
        </motion.div>
      </div>

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
