import Todo from "../models/todoSchema.js";
import { CreateTodoZod } from "../types.js";

export const createTodo = async (req, res) => {
  try {
    const createPayload = req.body;
    const parsedPayload = CreateTodoZod.safeParse(createPayload);

    if (!parsedPayload.success) {
      res.status(400).json({ message: "You sent the wrong data" });
      return;
    }
    await Todo.create({
      title: parsedPayload.title,
      description: parsedPayload.description,
      completed: false,
    });

    res.json({
      message: "Todo created successfully",
    });
  } catch (error) {
    console.error("Error in createTodo", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getTodo = async (req, res) => {
  try {
    const allTodos = await Todo.find({});
    res.json({
      message: "Todo fetched successfully",
      allTodos,
    });
  } catch (error) {
    console.error("Error in getTodo", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
