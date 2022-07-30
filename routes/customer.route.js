const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  createUser,
  getOneUser,
  deleteUser,
  updateUser,
} = require("../controllers/customer.controller");

router.get("/", getAllUsers);
router.get("/:id", getOneUser);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);
router.post("/", createUser);

module.exports = router;