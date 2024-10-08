import Todo from "../models/todoSchema.js";
import { CreateTodoZod, UpdateTodoZod } from "../types.js";

export const createTodo = async (req, res) => {
  try {
    const createPayload = req.body;
    const parsedPayload = CreateTodoZod.safeParse(createPayload);

    if (!parsedPayload.success) {
      res.status(411).json({ message: "You sent the wrong data" });
      return;
    }
    await Todo.create({
      title: parsedPayload.title,
      description: parsedPayload.description,
      completed: false,
    });

    res.json({
      message: "Todo created successfully",
      success: true,
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

export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTodo = await Todo.findByIdAndDelete(id);

    if (!deletedTodo) {
      res.status(404).json({
        msg: "Todo not found",
      });
      return;
    }
    res.status(200).json({
      msg: "Todo deleted succesfully",
      success: true,
      deletedTodo,
    });
  } catch (error) {
    console.error("Error in updating the todos", error.message);
    res.status(500).json({
      msg: "Something went wrong",
    });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const updatePayload = req.body;
    const parsedPayload = UpdateTodoZod.safeParse(updatePayload);
    if (!parsedPayload.success) {
      res.status(411).json({
        msg: "You sent the wrong inputs",
      });
      return;
    }
    await Todo.update(
      {
        _id: req.body.id,
      },
      {
        title: parsedPayload.title,
        description: parsedPayload.description,
        completed: parsedPayload.completed,
      },
    );
  } catch (error) {
    console.error("Error in updating the todos", error);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

export const completeTodo = async (req, res) => {
  try {
    const updatePayload = req.body;
    const parsedPayload = UpdateTodoZod.safeParse(updatePayload);
    if (!parsedPayload.success) {
      res.status(411).json({
        msg: "You sent the wrong inputs",
      });
      return;
    }
    const updatedTodo = await Todo.update(
      {
        _id: req.body.id,
      },
      {
        completed: parsedPayload.completed,
      },
    );
  } catch (error) {
    console.error("Error in completing the todos", error);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};
