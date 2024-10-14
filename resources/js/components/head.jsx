import { Head as BaseHead } from "@inertiajs/react";

const appName = import.meta.env.VITE_APP_NAME;

export function Head({ title = "", ...props }) {
    const pageTitle = title ? `${title} | ${appName}` : appName;

    return <BaseHead title={pageTitle} {...props} />;
}
