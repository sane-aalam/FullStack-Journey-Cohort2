const express = require("express");
const app = express();
const port = 5000;
const { createTodo, updateTodo } = require("./types.js");
const Todo = require("./db/index.js");

// Features(Simple Todo-App): MERN-stack-app
// Create a Todo
// Get All Todos
// Mark Todo as Done

app.use(express.json());

console.log("running this app")
app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload); // take as object {title,description} validation
  console.log(parsePayload)
  if (!parsePayload.success) {
    res.status(411).json({
      message: "Invalid input: Please provide the correct value.",
      statusCode: 411,
    });
  }

  // connect with database
  try {
  const newTodo = await Todo.create({
    title: parsePayload.data.title,
    description: parsePayload.data.description,
    completed: parsePayload.completed ?? false, // default to false if undefined
  });

  res.status(201).json({
    success: true,
    message: "Todo created successfully",
    data: newTodo,
  });
} catch (error) {
  console.error("Error creating todo:", error.message);

  res.status(500).json({
   
    success: false,
    message: "Failed to create todo",
    error: error.message,
  });
}
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
  console.log(parsePayload)
  if (!parsePayload.success) {
    res.status(411).json({
      massage: "you have send wrong input value!",
      statuscode: 411,
    });
  }

  // connect with db
  await Todo.update(
    { _id: req.body.id },
    {
      completed: true,
    }
  );
});
console.log("running this app1")

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
