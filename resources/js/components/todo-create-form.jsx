import { useForm } from "@inertiajs/react";
import toast from "react-hot-toast";

import { handleFormInputChange, withSubmit } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FormControl, FormInput, FormLabel, FormMessage } from "@/components/form";

export function TodoCreateForm({ dialog }) {
    const form = useForm({
        title: ""
    });

    const handleSubmit = withSubmit(() => {
        form.post("/todos", {
            onSuccess: () => {
                toast.success("Todo created successfully.");
                form.reset();
                dialog && dialog.close();
            }
        });
    });

    return (
        <form onSubmit={handleSubmit}>
            <FormControl error={form.errors.title}>
                <FormLabel>Title</FormLabel>
                <FormInput
                    placeholder="Enter todo title"
                    value={form.data.title}
                    onChange={handleFormInputChange(form, "title")}
                />
                <FormMessage />
            </FormControl>

            <div className="mt-6 flex justify-end">
                <Button type="submit" disabled={form.processing}>Create</Button>
            </div>
        </form>
    );
}
