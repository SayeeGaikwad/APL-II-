const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.type("html");
  res.send("<h2>Welcome to GET Method Example 🚀</h2>");
});

app.get("/user", (req, res) => {
  // Example: http://localhost:4002/user?name=Pranav&age=21
  const name = req.query.name;
  const age = req.query.age;

  res.type("html");
  res.send(`
    <h3>GET Request Received ✅</h3>
    <p><b>Name:</b> ${name}</p>
    <p><b>Age:</b> ${age}</p>
  `);
});

app.listen(4002, () => {
  console.log("✅ Server is running on http://localhost:4002");
});
