import { v4 as uuidv4 } from "uuid";

let users = [];

// get Router for find all users
export const getAllUsers = (req, res) => {
  res.send(users);
};

// post Router for create a user
export const createUser = (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });

  res.send(`User with the name ${user.firstName} added to the database`);
};

// get Router with id for find a user
export const getSingleUser = (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);

  res.send(foundUser);
};

// delete Router with id for delete a user
export const deleteUser = (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);
  res.send(`User with the id ${id} delete from the database`);
};

// patch Router with id for update a user
export const updateUser = (req, res) => {
  const { id } = req.params;

  const { firstName, lastName, age } = req.body;

  const user = users.find((user) => user.id === id);

  if (firstName) {
    user.firstName = firstName;
  }
  if (lastName) {
    user.lastName = lastName;
  }
  if (age) {
    user.age = age;
  }
  res.send(`User with the id ${id} has been updated from the database`);
};
