const express = require("express");
const app = express();
require("dotenv").config(); // Load .env variables

// Environment variables
const PORT = process.env.PORT || 8080;
const cors = require("cors");
app.use(cors());

// Middleware
app.use(express.json());

// Routes
const userRoutes = require("./routes/userRoutes");
const todoRoutes = require("./routes/todoRoutes");
app.use("/users", userRoutes);
app.use("/todos", todoRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

console.log(process.env.PORT); // Should print 8080
console.log(process.env.DB_HOST); // Should print localhost