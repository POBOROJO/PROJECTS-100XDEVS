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
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
