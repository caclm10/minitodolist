import { Link as BaseLink } from "@inertiajs/react";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export const Link = forwardRef(
    function Link({ className, ...props }, ref) {
        return (
            <BaseLink
                ref={ref}
                className={twMerge("text-primary decoration-primary hover:underline", className)}
                {...props}
            />
        );
    }
);
