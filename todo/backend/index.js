// write a basic express boilerplate code,
// with express.json() middlware

const express = require("express");
const { createTodo, updateTodo } = require("./types");
const app = express();
app.use("express.json()");

app.post("/todo",(req,res) =>{ // here we create a new todo with title and a description
    const createPayload = req.body;
    const parsePayload  = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg: "You entered inputs",
        })
        return;
    }
})

app.get("/todo", (req,res)=>{ // here we get all todos in the list

})

app.put("/completed" ,(req,res)=>{ // here we mark a todo as completed
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg: "You entered inputs",
        })
        return;
    }
})

