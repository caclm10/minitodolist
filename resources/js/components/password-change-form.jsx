import { useForm } from "@inertiajs/react";

import { handleFormInputChange, withSubmit } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FormControl, FormInput, FormLabel, FormMessage } from "@/components/form";
import toast from "react-hot-toast";

export function PasswordChangeForm({ dialog }) {
    const form = useForm({
        current_password: "",
        password: "",
    });

    const handleSubmit = withSubmit(() => {
        form.patch("/change-password", {
            onSuccess: () => {
                toast.success("Password changed successfully.");
                dialog?.close();
            },
            onFinish: () => {
                form.reset();
            }
        });
    });

    return (
        <form onSubmit={handleSubmit}>
            <div className="space-y-4">
                <FormControl error={form.errors.current_password}>
                    <FormLabel>Current Password</FormLabel>
                    <FormInput
                        type="password"
                        placeholder="Enter current password"
                        value={form.data.current_password}
                        onChange={handleFormInputChange(form, "current_password")}
                    />
                    <FormMessage />
                </FormControl>
                <FormControl error={form.errors.password}>
                    <FormLabel>New Password</FormLabel>
                    <FormInput
                        type="password"
                        placeholder="Enter new password"
                        value={form.data.password}
                        onChange={handleFormInputChange(form, "password")}
                    />
                    <FormMessage />
                </FormControl>
            </div>

            <div className="mt-6 flex justify-end">
                <Button type="submit" disabled={form.processing}>
                    Change Password
                </Button>
            </div>
        </form>
    );
}
