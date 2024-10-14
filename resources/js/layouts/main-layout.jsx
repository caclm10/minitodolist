import { MainHeader } from "@/components/main-header";
import { RootLayout } from "@/layouts/root-layout";

export function MainLayout({ children }) {
    return (
        <RootLayout>
            <MainHeader />

            <div className="h-12"></div>

            <div className="container">
                {children}
            </div>
        </RootLayout>
    );
}
