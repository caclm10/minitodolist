import { useForm } from "@inertiajs/react";
import toast from "react-hot-toast";

import { handleFormInputChange, withSubmit } from "@/lib/utils";
import { FormControl, FormInput, FormLabel, FormMessage } from "@/components/form";
import { Button } from "@/components/ui/button";
import { useTask } from "@/contexts/task-context";

export function TaskCreateForm({ dialog }) {
    const { todoId } = useTask();

    const form = useForm({
        content: ""
    });

    const handleSubmit = withSubmit(() => {
        form.post(`/todos/${todoId}/tasks`, {
            onSuccess: () => {
                toast.success("Task created successfully.");
                form.reset();
                dialog && dialog.close();
            }
        });
    });

    return (
        <form onSubmit={handleSubmit}>
            <FormControl error={form.errors.content}>
                <FormLabel>Content</FormLabel>
                <FormInput
                    placeholder="Enter task content"
                    value={form.data.content}
                    onChange={handleFormInputChange(form, "content")}
                />
                <FormMessage />
            </FormControl>

            <div className="mt-6 flex justify-end">
                <Button type="submit" disabled={form.processing}>Create</Button>
            </div>
        </form>
    );
}
