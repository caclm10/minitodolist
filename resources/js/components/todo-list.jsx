import { Link, useForm } from "@inertiajs/react";
import toast from "react-hot-toast";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { MoreVerticalIcon } from "lucide-react";

import { useDialog } from "@/hooks/use-dialog";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { DeleteConfirmation } from "@/components/delete-confirmation";
import { FormDialog } from "@/components/form-dialog";
import { TodoEditForm } from "@/components/todo-edit-form";

export function TodoList({ todos }) {
    const [animationRef] = useAutoAnimate();
    return (
        <ul ref={animationRef} className="flex flex-col gap-y-2">
            {todos.map(todo => <TodoListItem key={todo.id} todo={todo} />)}
        </ul>
    );
}

export function TodoListItem({ todo }) {
    const editDialog = useDialog();
    const deleteConfirmation = useDialog();
    const deleteForm = useForm();

    function handleConfirmDelete() {
        deleteForm.delete(`/todos/${todo.id}`, {
            onSuccess: () => {
                toast.success("Todo deleted successfully.");
            },
        });
    }

    return (
        <>
            <li className="flex items-center justify-between px-4 py-2 hover:bg-accent/60">
                <span>{todo.title}</span>

                <div className="flex items-center gap-x-4">
                    <Button variant="outline" asChild>
                        <Link href={`/todos/${todo.id}/tasks`}>
                            <span className="mr-1 font-semibold">{todo.tasks_count || 0}</span>
                            <span>Tasks</span>
                        </Link>
                    </Button>

                    <DropdownMenu>
                        <DropdownMenuTrigger disabled={deleteForm.processing} asChild>
                            <Button type="button" variant="outline" size="icon">
                                <MoreVerticalIcon className="size-4" />
                                <span className="sr-only">Actions</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem onClick={() => editDialog.show()}>Edit</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => deleteConfirmation.show()}>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </li>

            <FormDialog
                title="Edit Todo"
                description={`Edit Todo ${todo.title}`}
                dialog={editDialog}
            >
                <TodoEditForm todo={todo} dialog={editDialog} />
            </FormDialog>

            <DeleteConfirmation
                title="Delete Todo"
                description="Are you sure you want to delete this todo? This action cannot be undone. All tasks associated with this todo will also be deleted."
                dialog={deleteConfirmation}
                onConfirm={handleConfirmDelete}
            />
        </>
    );
}
