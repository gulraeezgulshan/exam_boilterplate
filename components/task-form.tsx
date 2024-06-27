"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { createTask } from "@/actions/tasks";
import { taskSchema } from "@/schemas";

const TaskForm = () => {

    const form = useForm<z.infer<typeof taskSchema>>({
        resolver: zodResolver(taskSchema),
        defaultValues: {
            task: "",
            isCompleted: false,
        },
    })
    function onSubmit(values: z.infer<typeof taskSchema>) {

        createTask(values);
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex gap-2">
                <div className="flex-1">
                    <FormField
                        control={form.control}
                        name="task"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Enter task here..." {...field} className="flex-1" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <Button type="submit">
                    Add Task
                </Button>

            </form>
        </Form>
    )
}

export default TaskForm