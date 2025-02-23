/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Route to handle running backend code
app.post("/run-backend", (req, res) => {
  const backendCode = req.body.backendCode;

  // For now, just log the code to the console
  console.log("Received backend code: ");
  console.log(backendCode);

  // You can add logic here to evaluate or execute the backend code securely
  // (Be cautious with eval or executing arbitrary code)

  res.json({
    message: "Backend code executed successfully!", // Respond back to frontend
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});
