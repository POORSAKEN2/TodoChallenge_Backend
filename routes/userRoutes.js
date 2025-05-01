const express = require("express");
const router = express.Router();
const userController = require("../controllers/usercontroller");
const authMiddleware = require("../middleware/authMiddleware");

// Public routes
router.post("/auth/login", userController.LoginUser);
router.post("/auth/register", userController.RegisterUser);


});

module.exports = router;
