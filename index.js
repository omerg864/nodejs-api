import express from "express";
import bodyParser from "body-parser";
import usersRoutes from "./routes/users.js";

const app = express();
const POST = 5000;

app.use(bodyParser.json());

app.use("/users", usersRoutes);

app.get('/', (req, res) => {
    console.log('GET /');
    res.send('asfsafas');
});

app.listen(POST, () => {
  console.log(`Server is listening on port ${POST}`);
});