import { Toaster } from "react-hot-toast";

export function RootLayout({ children }) {
    return (
        <>
            {children}

            <Toaster />
        </>
    );
}
