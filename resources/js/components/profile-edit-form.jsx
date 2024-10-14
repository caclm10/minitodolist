import { useForm } from "@inertiajs/react";
import toast from "react-hot-toast";

import { handleFormInputChange, withSubmit } from "@/lib/utils";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { FormControl, FormInput, FormLabel, FormMessage } from "@/components/form";

export function ProfileEditForm({ dialog }) {
    const { user } = useAuth();

    const form = useForm({
        name: user.name,
        email: user.email
    });

    const handleSubmit = withSubmit(() => {
        form.patch("/profile", {
            onSuccess: () => {
                toast.success("Profile updated successfully.");
                form.setDefaults();
                dialog?.close();
            }
        });
    });

    return (
        <form onSubmit={handleSubmit}>
            <div className="space-y-4">
                <FormControl error={form.errors.name}>
                    <FormLabel>Name</FormLabel>
                    <FormInput
                        placeholder="Enter name"
                        value={form.data.name}
                        onChange={handleFormInputChange(form, "name")}
                    />
                    <FormMessage />
                </FormControl>

                <FormControl error={form.errors.email}>
                    <FormLabel>Email address</FormLabel>
                    <FormInput
                        placeholder="Enter email"
                        value={form.data.email}
                        onChange={handleFormInputChange(form, "email")}
                    />
                    <FormMessage />
                </FormControl>
            </div>

            <div className="mt-6 flex justify-end">
                <Button type="submit" disabled={form.processing}>Update</Button>
            </div>
        </form>
    );
}
