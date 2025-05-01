const express = require("express");
const router = express.Router();
const userController = require("../controllers/usercontroller");
const authMiddleware = require("../middleware/authMiddleware");


router.post("/auth/login", userController.LoginUser);
router.post("/auth/register", userController.RegisterUser);


router.get("/auth/profile", authMiddleware, (req, res) => {
  res.json({
    message: `Welcome, ${req.user.username}`,
    user: req.user,
  });
});

module.exports = router;
