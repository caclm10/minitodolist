import { useState } from "react";

export function useDialog() {
    const [isOpen, setIsOpen] = useState(false);

    function show() {
        setIsOpen(true);
    }

    function close() {
        setIsOpen(false);
    }

    function toggle() {
        isOpen ? close() : show();
    }

    return {
        isOpen,
        onIsOpenChange: setIsOpen,
        show,
        close,
        toggle
    };
}
