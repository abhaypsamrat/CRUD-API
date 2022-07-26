import express from "express";

import {
  createUser,
  getAllUsers,
  getSingleUser,
  deleteUser,
  updateUser,
} from "../controllers/users.js";

const router = express.Router();

// get Router for find all users
router.get("/", getAllUsers);

// post Router for create a user
router.post("/", createUser);

// get Router with id for find a user
router.get("/:id", getSingleUser);

// delete Router with id for delete a user
router.delete("/:id", deleteUser);

// patch Router with id for update a user
router.patch("/:id", updateUser);

export default router;
