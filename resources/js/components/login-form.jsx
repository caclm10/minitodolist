import { useForm } from "@inertiajs/react";

import { handleFormInputChange, withSubmit } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FormControl, FormInput, FormLabel, FormMessage } from "@/components/form";
import { Link } from "@/components/ui/link";

export function LoginForm() {
    const form = useForm({
        email: "",
        password: ""
    });

    const handleSubmit = withSubmit(() => {
        form.post("/login", {
            onError: () => {
                form.reset("password");
            }
        });
    });
    return (
        <form onSubmit={handleSubmit}>
            <div className="space-y-4">
                <FormControl error={form.errors.email}>
                    <FormLabel>Email address</FormLabel>
                    <FormInput
                        placeholder="youremail@example.com"
                        value={form.data.email}
                        onChange={handleFormInputChange(form, "email")}
                    />
                    <FormMessage />
                </FormControl>

                <FormControl error={form.errors.password}>
                    <FormLabel>Password</FormLabel>
                    <FormInput
                        type="password"
                        placeholder="•••••••••••••"
                        value={form.data.password}
                        onChange={handleFormInputChange(form, "password")}
                    />
                    <FormMessage />
                </FormControl>
            </div>

            <div className="mt-6 flex justify-end items-center gap-x-4">
                <Link href="/register" className="text-sm">Register</Link>
                <Button type="submit" disabled={form.processing}>Submit</Button>
            </div>
        </form>
    );
}
