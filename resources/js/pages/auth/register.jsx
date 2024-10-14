import { Head } from "@/components/head";
import { AuthCard } from "@/components/auth-card";
import { RegisterForm } from "@/components/register-form";
import { AuthLayout } from "@/layouts/auth-layout";

export default function RegisterPage() {
    return (
        <>
            <Head title="Register" />

            <AuthCard title="Register" description="Register a new account.">
                <RegisterForm />
            </AuthCard>
        </>
    );
}

RegisterPage.layout = (page) => {
    return (
        <AuthLayout>{page}</AuthLayout>
    );
};
