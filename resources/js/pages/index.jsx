import { Head } from "@/components/head";
import { Button } from "@/components/ui/button";
import { router } from "@inertiajs/react";

export default function IndexPage() {
    return (
        <>
            <Head title="Index" />

            <h1>Index Page</h1>

            <div className="p-5">
                <Button type="button" onClick={() => router.post("/logout")}>
                    Log out
                </Button>
            </div>
        </>
    );
}
