const express = require("express");
const app = express();

// Middleware to parse JSON body
app.use(express.json());

// 👉 GET route (for browser view)
app.get("/", (req, res) => {
  res.type("html");
  res.send("<h2>Use POST request to /user endpoint 📨</h2>");
});

// 👉 POST route (for Postman or frontend form)
app.post("/user", (req, res) => {
  // Data sent from client (like Postman or frontend form)
  const { name, age } = req.body;

  res.type("html");
  res.send(`
    <h2>POST Request Received ✅</h2>
    <p><b>Name:</b> ${name}</p>
    <p><b>Age:</b> ${age}</p>
  `);
});

app.listen(4003, () => {
  console.log("✅ Server is running on http://localhost:4003");
});
