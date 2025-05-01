const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");
const authenticateToken = require("../middleware/authMiddleware");


router.get("/", authenticateToken, todoController.getTodos);
router.post("/", authenticateToken, todoController.addTodo); 

router.put("/:id", authenticateToken, todoController.updateTodo);
router.delete("/:id", authenticateToken, todoController.deleteTodo);

module.exports = router;
