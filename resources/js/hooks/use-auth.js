import { usePage } from "@inertiajs/react";

export function useAuth() {
    const { auth } = usePage().props;

    return auth;
}
