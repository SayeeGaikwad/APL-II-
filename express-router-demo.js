const express = require("express");
const app = express();

// ✅ Create a Router object
const router = express.Router();

// Middleware to parse JSON data
app.use(express.json());

// 👉 GET route for home
app.get("/", (req, res) => {
  res.type("html");
  res.send("<h2>Welcome to Express Router Demo 🧭</h2><p>Try /api/info or /api/user</p>");
});

// 👉 Define routes using Router
router.get("/info", (req, res) => {
  res.send("<h3>📘 This is the /api/info route handled by router.</h3>");
});

router.post("/user", (req, res) => {
  const { name, age } = req.body;
  res.type("html");
  res.send(`
    <h3>👤 User Created Successfully!</h3>
    <p><b>Name:</b> ${name}</p>
    <p><b>Age:</b> ${age}</p>
  `);
});

router.put("/update", (req, res) => {
  res.send("<h3>✏️ User data updated using PUT method.</h3>");
});

router.delete("/remove", (req, res) => {
  res.send("<h3>❌ User removed successfully!</h3>");
});

// ✅ Mount the router at /api path
app.use("/api", router);

// ✅ Start server
app.listen(4005, () => {
  console.log("✅ Server is running on http://localhost:4005");
});
