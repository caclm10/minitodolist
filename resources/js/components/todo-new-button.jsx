import { useDialog } from "@/hooks/use-dialog";
import { Button } from "@/components/ui/button";
import { FormDialog } from "@/components/form-dialog";
import { TodoCreateForm } from "@/components/todo-create-form";


export function TodoNewButton() {
    const dialog = useDialog();

    return (
        <FormDialog
            title="New Todo"
            description="Create a new todo"
            dialog={dialog}
            trigger={<Button type="button">New Todo</Button>}
        >
            <TodoCreateForm dialog={dialog} />
        </FormDialog>

    );
}
