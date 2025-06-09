const express = require("express");
const app = express();
const port = 5000;
const { createTodo, updateTodo } = require("./types.js");
const { todo } = require("./db/index.js");

// Features(Simple Todo-App): MERN-stack-app
// Create a Todo
// Get All Todos
// Mark Todo as Done

app.use(express.json());

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload); // take as object {title,description} validation
  if (!parsePayload.success) {
    res.status(411).json({
      message: "Invalid input: Please provide the correct value.",
      statusCode: 411,
    });
  }
  // connect with database
  await todo.create({
    title: parsePayload.title,
    description: parsePayload.description,
    completed:parsePayload.completed,
  });

  res.json({
    message: "todo is created!",
    statusCode: 411,
  });
});

app.get("/todos", async function (req, res) {
  try {
    const todos = await Todo.find({});
    res.json({ todos });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

app.put("/completed", async (req, res) => {
  const updatePlayload = req.body;
  const parsePayload = updateTodo.safeParse(updatePlayload); // take as object {title,description} validation
  if (!parsePayload.success) {
    res.status(411).json({
      massage: "you have send wrong input value!",
      statuscode: 411,
    });
  }

  // connect with db
  await todo.update(
    { _id: req.body.id },
    {
      completed: true,
    }
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
