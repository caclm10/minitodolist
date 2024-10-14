import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "@inertiajs/react";
import { ArrowLeftIcon } from "lucide-react";

export function MainCard({ title = "", backTo, children = <></> }) {
    return (
        <Card>
            <CardHeader>
                <div className="flex items-center gap-x-4">
                    {backTo && (
                        <Button variant="ghost" size="icon" asChild>
                            <Link href={backTo}>
                                <span className="sr-only">Back</span>
                                <ArrowLeftIcon className="size-4" />
                            </Link>
                        </Button>
                    )}
                    <CardTitle>{title}</CardTitle>
                </div>
            </CardHeader>

            <CardContent>
                <div className="space-y-6">
                    {children}
                </div>
            </CardContent>
        </Card>
    );
}
