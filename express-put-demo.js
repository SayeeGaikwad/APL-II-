const express = require("express");
const app = express();

// Middleware to parse JSON body
app.use(express.json());

// 👉 GET route (to avoid "Cannot GET /" in browser)
app.get("/", (req, res) => {
  res.type("html");
  res.send("<h2>Use PUT request to /update endpoint ✏️</h2>");
});

// 👉 PUT route
app.put("/update", (req, res) => {
  const { id, name, age } = req.body;

  res.type("html");
  res.send(`
    <h2>PUT Request Received ✅</h2>
    <p><b>ID:</b> ${id}</p>
    <p><b>Updated Name:</b> ${name}</p>
    <p><b>Updated Age:</b> ${age}</p>
  `);
});

app.listen(4004, () => {
  console.log("✅ Server is running on http://localhost:4004");
});
