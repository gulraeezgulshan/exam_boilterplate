import { z } from "zod";

export const taskSchema = z.object({
    task: z.string().min(2, {
        message: "Task must be at least 2 characters.",
    }),

    isCompleted: z.boolean()

})