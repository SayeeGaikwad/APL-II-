const express = require("express");
const app = express();

// ✅ Middleware using app.use() — runs for every request
app.use((req, res, next) => {
  console.log(`🕒 ${req.method} request received at ${req.url}`);
  next(); // pass control to the next middleware or route
});

// ✅ Example: Middleware for a specific path
app.use("/admin", (req, res, next) => {
  console.log("🔐 Admin section accessed");
  next();
});

// Root route
app.get("/", (req, res) => {
  res.type("html");
  res.send("<h2>Welcome to app.use() Demo 🌐</h2><p>Visit /admin or /about</p>");
});

// About route
app.get("/about", (req, res) => {
  res.type("html");
  res.send("<h2>About Page 🧠</h2>");
});

// Admin route
app.get("/admin", (req, res) => {
  res.type("html");
  res.send("<h2>Admin Dashboard 🔑</h2>");
});

// 404 Middleware (for unmatched routes)
app.use((req, res) => {
  res.status(404).type("html").send("<h2>❌ Page Not Found</h2>");
});

// ✅ Start server
app.listen(4006, () => {
  console.log("✅ Server is running on http://localhost:4006");
});
