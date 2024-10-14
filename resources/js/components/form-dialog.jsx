import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { useDialog } from "@/hooks/use-dialog";



export function FormDialog({
    title = "",
    description = "",
    dialog,
    trigger,
    children
}) {
    const fallbackDialog = useDialog();
    const _dialog = dialog || fallbackDialog;

    return (
        <Dialog open={_dialog.isOpen} onOpenChange={_dialog.onIsOpenChange}>
            {trigger && (
                <DialogTrigger asChild>
                    {trigger}
                </DialogTrigger>
            )}
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription className="sr-only">{description}</DialogDescription>
                </DialogHeader>

                <div className="pt-4">
                    {children}
                </div>
            </DialogContent>
        </Dialog>

    );
}
