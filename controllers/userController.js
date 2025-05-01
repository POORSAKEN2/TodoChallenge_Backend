const db = require("../db/index.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

function LoginUser(req, res) {
  if (!req.body) {
    return res.status(400).json({ error: "Request body is missing" });
  }

  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Username and password are required" });
  }

  const sql = "SELECT * FROM users WHERE username = ?";
  db.query(sql, [username], async (err, results) => {
    if (err) return res.status(500).json({ error: "Server error" });
    if (results.length === 0)
      return res.status(401).json({ error: "Invalid username or password" });

    const user = results[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid)
      return res.status(401).json({ error: "Invalid username or password" });

    const token = jwt.sign(
      { id: user.id, username: user.username },
      JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || "1h" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user: { id: user.id, username: user.username },
    });
  });
}

function RegisterUser(req, res) {
  if (!req.body) {
    return res.status(400).json({ error: "Request body is missing" });
  }

  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Username and password are required" });
  }

  const checkUserSql = "SELECT * FROM users WHERE username = ?";
  const insertUserSql = "INSERT INTO users (username, password) VALUES (?, ?)";

  db.query(checkUserSql, [username], (err, results) => {
    if (err) return res.status(500).json({ error: "Server error" });
    if (results.length > 0)
      return res.status(400).json({ error: "Username already exists" });

    const hashedPassword = bcrypt.hashSync(password, 10);
    db.query(insertUserSql, [username, hashedPassword], (err, results) => {
      if (err) return res.status(500).json({ error: "Server error" });

      res.status(201).json({
        message: "User registered successfully",
        userId: results.insertId,
      });
    });
  });
}

module.exports = {
  RegisterUser,
  LoginUser,
};
