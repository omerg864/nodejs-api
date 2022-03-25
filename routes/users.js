import express from "express";
import { v4 as uuidv4 } from 'uuid';


const router = express.Router();

let users = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 30,
        id: uuidv4(),
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        age: 28,
        id: uuidv4(),
    }
]

router.get("/", (req, res) => {
    res.send(users);
});

router.post("/", (req, res) => {
    users.push({...req.body, id: uuidv4()});
    res.send(users);
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    res.send(users.find(user => user.id === id));
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    users = users.filter(user => user.id !== id);
    res.send(users);
});

router.patch("/:id", (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    const user = users.find(user => user.id === id);
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    res.send(users);
});

export default router;