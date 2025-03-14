import { z } from "zod";

export const CreateTodoZod = z.object({
  title: z.string.min(3, "Title name is required"),
  description: z.string(3, "Description is required"),
  // completed: z.boolean(),
});

export const UpdateTodoZod = z.object({
  id: z.string(),
});
