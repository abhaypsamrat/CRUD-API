import express from "express";

const router = express.Router();

const users = [
  {
    name: "user",
    lastName: "samrat",
    age: "20",
  },
  {
    name: "user",
    lastName: "samrat",
    age: "19",
  },
];

router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", (req, res) => {
  const user = req.body;

  users.push(user);

  res.send(`User with the name ${user.firstName} added to the database`);
});

export default router;
