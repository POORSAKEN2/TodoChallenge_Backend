const express = require("express");
const app = express();
require("dotenv").config(); 


const PORT = process.env.PORT || 8080;
const cors = require("cors");
app.use(cors());


app.use(express.json());


const userRoutes = require("./routes/userRoutes");
const todoRoutes = require("./routes/todoRoutes");
app.use("/users", userRoutes);
app.use("/todos", todoRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

console.log(process.env.PORT); 
console.log(process.env.DB_HOST);