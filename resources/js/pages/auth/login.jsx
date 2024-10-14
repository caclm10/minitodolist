import { Head } from "@/components/head";
import { AuthCard } from "@/components/auth-card";
import { AuthLayout } from "@/layouts/auth-layout";
import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
    return (
        <>
            <Head title="Login" />

            <AuthCard title="Login" description="Login to your account.">
                <LoginForm />
            </AuthCard>
        </>
    );
}

LoginPage.layout = (page) => {
    return (
        <AuthLayout>{page}</AuthLayout>
    );
};
