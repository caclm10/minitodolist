import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createContext, forwardRef, useContext, useId } from "react";
import { twMerge } from "tailwind-merge";

const FormControlContext = createContext({
    inputId: "",
    error: ""
});

export function useFormControl() {
    return useContext(FormControlContext);
}

export const FormControl = forwardRef(
    function FormControl({ error, ...props }, ref) {
        const inputId = useId();
        return (
            <FormControlContext.Provider value={{ inputId, error }} >
                <div ref={ref} {...props} />
            </FormControlContext.Provider>
        );
    }
);

export const FormLabel = forwardRef(
    function FormLabel(props, ref) {
        const { inputId } = useFormControl();

        return <Label ref={ref} htmlFor={inputId} {...props} />;
    }
);

export const FormInput = forwardRef(
    function FormInput(props, ref) {
        const { inputId, error } = useFormControl();
        const isInvalid = !!error;

        return (
            <Input
                ref={ref}
                id={inputId}
                invalid={isInvalid}
                {...props}
            />
        );
    }
);

export const FormMessage = forwardRef(
    function FormMessage({ className = "", ...props }, ref) {
        const { error } = useFormControl();

        if (!error) return null;

        return (
            <p ref={ref} className={twMerge("text-xs text-destructive mt-1.5", className)} {...props}>
                {error}
            </p>
        );
    }
);
