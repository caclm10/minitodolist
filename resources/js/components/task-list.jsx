import { useForm } from "@inertiajs/react";
import toast from "react-hot-toast";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { MoreVerticalIcon } from "lucide-react";

import { useDialog } from "@/hooks/use-dialog";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { DeleteConfirmation } from "@/components/delete-confirmation";
import { FormDialog } from "@/components/form-dialog";
import { useTask } from "@/contexts/task-context";
import { TaskEditForm } from "@/components/task-edit-form";

export function TaskList({ tasks }) {
    const [animationRef] = useAutoAnimate();
    return (
        <ul ref={animationRef} className="flex flex-col gap-y-2">
            {tasks.map(task => <TaskListItem key={task.id} task={task} />)}
        </ul>
    );
}

export function TaskListItem({ task }) {
    const { todoId } = useTask();

    const editDialog = useDialog();
    const deleteConfirmation = useDialog();
    const deleteForm = useForm();
    const completeForm = useForm();

    function handleConfirmDelete() {
        deleteForm.delete(`/todos/${todoId}/tasks/${task.id}`, {
            onSuccess: () => {
                toast.success("Task deleted successfully.");
            }
        });
    }

    return (
        <>
            <li className="flex items-center justify-between gap-x-5 px-4 py-2 group hover:bg-accent/60" data-completed={task.is_completed}>
                <span className="group-data-[completed=true]:line-through">{task.content}</span>

                <div className="flex items-center gap-x-4">
                    <Button
                        type="button"
                        variant="outline"
                        className="max-md:hidden"
                        disabled={completeForm.processing}
                        onClick={() => completeForm.patch(`/todos/${todoId}/tasks/${task.id}/complete`)}
                    >
                        {task.is_completed ? "Uncomplete" : "Complete"}
                    </Button>

                    <DropdownMenu>
                        <DropdownMenuTrigger disabled={deleteForm.processing || completeForm.processing} asChild>
                            <Button type="button" variant="outline" size="icon">
                                <MoreVerticalIcon className="size-4" />
                                <span className="sr-only">Actions</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem
                                className="md:hidden"
                                onClick={() => completeForm.patch(`/todos/${todoId}/tasks/${task.id}/complete`)}
                            >
                                {task.is_completed ? "Uncomplete" : "Complete"}
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => editDialog.show()}>Edit</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => deleteConfirmation.show()}>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </li>

            <FormDialog
                title="Edit Task"
                description={`Edit Task ${task.content}`}
                dialog={editDialog}
            >
                <TaskEditForm task={task} dialog={editDialog} />
            </FormDialog>

            <DeleteConfirmation
                title="Delete Task"
                description="Are you sure you want to delete this task? This action cannot be undone."
                dialog={deleteConfirmation}
                onConfirm={handleConfirmDelete}
            />
        </>
    );
}
