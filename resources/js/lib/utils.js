import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export function handleFormInputChange(form, name = "") {
    return (event) => {
        form.setData(name || event.target.name, event.target.value);
    };
}

export function withSubmit(cb) {
    return (event) => {
        event.preventDefault();
        cb(event);
    };
}
