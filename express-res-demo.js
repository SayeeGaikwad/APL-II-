const express = require("express");
const app = express();

// Sending simple text response
app.get("/", (req, res) => {
  res.send("Hello Pranav! This is a simple text response.");
});

// Sending HTML response
app.get("/html", (req, res) => {
  res.send("<h1 style='color:green;'>Welcome to Express Response Demo 🌱</h1>");
});

// Sending JSON response
app.get("/json", (req, res) => {
  res.json({
    name: "Pranav",
    course: "B.Tech CSE",
    topic: "Express Response Demo",
  });
});

// Sending status code
app.get("/status", (req, res) => {
  res.status(201).send("✅ Created successfully!");
});

// Redirecting to another route
app.get("/redirect", (req, res) => {
  res.redirect("/html");
});

// Starting the server
app.listen(4000, () => {
  console.log("✅ Server is running on http://localhost:4000");
});
