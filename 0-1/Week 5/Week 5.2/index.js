const express = require('express');
const app = express();
const port = 5000;
const {createTodo,updateTodo} = require("./types.js");

// Features:
// Create a Todo
// Get All Todos
// Mark Todo as Done

app.use(express.json());

app.post("/todo",(req, res)=>{
   const createPayload = req.body;
   res.json({
    createPayload,
   })
})

app.get("/todos",(req, res)=>{
    console.log("all todos is showed")
    return;
})

app.put("/completed",(req, res)=>{
    console.log("todo is mark done!")
    return;
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})