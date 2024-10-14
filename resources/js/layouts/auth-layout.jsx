import { RootLayout } from "@/layouts/root-layout";

export function AuthLayout({ children }) {
    return (
        <RootLayout>
            <div className="container py-12 max-w-lg">
                {children}
            </div>
        </RootLayout>
    );
}
