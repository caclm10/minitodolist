import { FormDialog } from "@/components/form-dialog";
import { TaskCreateForm } from "@/components/task-create-form";
import { Button } from "@/components/ui/button";
import { useDialog } from "@/hooks/use-dialog";


export function TaskNewButton() {
    const dialog = useDialog();

    return (
        <FormDialog
            title="New Task"
            description="Create a new task"
            dialog={dialog}
            trigger={<Button type="button">New Task</Button>}
        >
            <TaskCreateForm dialog={dialog} />
        </FormDialog>
    );
}
