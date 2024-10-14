import { useDialog } from "@/hooks/use-dialog";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export function DeleteConfirmation({
    title = "",
    description = "",
    dialog,
    onConfirm,
    children
}) {
    const fallbackDialog = useDialog();
    const _dialog = dialog || fallbackDialog;

    return (
        <AlertDialog open={_dialog.isOpen} onOpenChange={_dialog.onIsOpenChange}>
            {children && (
                <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
            )}
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{title}</AlertDialogTitle>
                    <AlertDialogDescription>{description}</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction variant="destructive" onClick={onConfirm}>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    );
}
