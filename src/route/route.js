const express = require("express");
const UserController = require("../controller/controller.js");

const router = express.Router();

router.post("/", UserController.createUser);

router.get("/admin", UserController.getUser);
router.patch("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);
module.exports = router;