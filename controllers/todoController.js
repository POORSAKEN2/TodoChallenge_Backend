const db = require("../db/index");

function getTodos(req, res) {
  const sql = "SELECT * FROM todos WHERE user_id = ?";
  db.query(sql, [req.user.id], (err, results) => {
    if (err) return res.status(500).json({ error: "Failed to fetch todos" });
    res.json(results);
  });
}

function addTodo(req, res) {
  const { title, completed = false } = req.body;
  if (!title) return res.status(400).json({ error: "Title is required" });

  const sql = "INSERT INTO todos (user_id, title, completed) VALUES (?, ?, ?)";
  db.query(sql, [req.user.id, title, completed], (err, results) => {
    if (err) return res.status(500).json({ error: "Failed to add todo" });
    res.status(201).json({ message: "Todo added", todoId: results.insertId });
  });
}

function updateTodo(req, res) {
  const { id } = req.params;
  const { title, completed } = req.body;

  const sql =
    "UPDATE todos SET title = ?, completed = ? WHERE id = ? AND user_id = ?";
  db.query(sql, [title, completed, id, req.user.id], (err, results) => {
    if (err) return res.status(500).json({ error: "Failed to update todo" });
    if (results.affectedRows === 0)
      return res.status(404).json({ error: "Todo not found" });
    res.json({ message: "Todo updated" });
  });
}

function deleteTodo(req, res) {
  const { id } = req.params;
  const sql = "DELETE FROM todos WHERE id = ? AND user_id = ?";
  db.query(sql, [id, req.user.id], (err, results) => {
    if (err) return res.status(500).json({ error: "Failed to delete todo" });
    if (results.affectedRows === 0)
      return res.status(404).json({ error: "Todo not found" });
    res.json({ message: "Todo deleted" });
  });
}

module.exports = {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
};
