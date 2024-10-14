import { useForm } from "@inertiajs/react";
import toast from "react-hot-toast";

import { handleFormInputChange, withSubmit } from "@/lib/utils";
import { useTask } from "@/contexts/task-context";
import { Button } from "@/components/ui/button";
import { FormControl, FormInput, FormLabel, FormMessage } from "@/components/form";

export function TaskEditForm({ task, dialog }) {
    const { todoId } = useTask();

    const form = useForm({
        content: task.content
    });

    const handleSubmit = withSubmit(() => {
        form.patch(`/todos/${todoId}/tasks/${task.id}`, {
            onSuccess: () => {
                toast.success("Task updated successfully.");
                dialog && dialog.close();
            }
        });
    });

    return (
        <form onSubmit={handleSubmit}>
            <FormControl error={form.errors.content}>
                <FormLabel>Title</FormLabel>
                <FormInput
                    placeholder="Enter todo content"
                    value={form.data.content}
                    onChange={handleFormInputChange(form, "content")}
                />
                <FormMessage />
            </FormControl>

            <div className="mt-6 flex justify-end">
                <Button type="submit" disabled={form.processing}>Update</Button>
            </div>
        </form>
    );
}
