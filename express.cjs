const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001

app.use(cors());
app.use(express.json());

users = [
    {
        id: 1,
        name: "John",
        grade: 10
    },
    {
        id: 2,
        name: "Jane",
        grade: 9
    },
    {
        id: 3,
        name: "Joe",
        grade: 8
    }
];

app.get("/", (req, res) => {
    res.send("This is the root file!");
});

app.get("/users", (req, res) => {
    res.send(users);
});

app.get("/users/:id", (req, res) => {
    const id = req.params.id;
    const user = users.find(user => user.id == id);
    if (user) {
        res.send(user);
    }
    else {
        res.status(404).send("User not found");
    }
});

app.delete("/users/:id", (req, res) => {
    const id = req.params.id;
    users = users.filter(user => user.id != id);
    res.status(204).send("User deleted");
})

app.post("/users", (req, res) => {
    const user = req.body;
    console.log(user);
    res.json(user)
    users.push(user);
})
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${port}`);
})
