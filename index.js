import express from "express";
import bodyParser from "body-parser";

import usersRoutes from './routes/users.js';

const PORT = 5000;
const app = express();

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/', (req, res) => {
  res.send("Helllo express from local");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
