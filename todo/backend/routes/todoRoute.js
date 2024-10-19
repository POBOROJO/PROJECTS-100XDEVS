import express from "express";
import {
  createTodo,
  getTodo,
  completeTodo,
  deleteTodo,
} from "../controllers/todoController";

const router = express.Router();

router.route("/todo/add").post(createTodo);
router.route("/todo/update").put(completeTodo);
router.route("/todo/delete/:id").delete(deleteTodo);
router.route("/todo/get").get(getTodo);

export default router;
