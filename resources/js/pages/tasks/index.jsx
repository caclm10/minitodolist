import { Head } from "@/components/head";
import { MainCard } from "@/components/main-card";
import { TaskList } from "@/components/task-list";
import { TaskNewButton } from "@/components/task-new-button";
import { TaskContext } from "@/contexts/task-context";
import { MainLayout } from "@/layouts/main-layout";

export default function TasksPage({ todo, tasks }) {
    return (
        <>
            <Head title={`Tasks - ${todo.title}`} />

            <MainCard title={todo.title} backTo="/todos">
                <TaskContext.Provider value={{ todoId: todo.id }}>
                    <div className="flex justify-end">
                        <TaskNewButton />
                    </div>

                    <TaskList tasks={tasks} />
                </TaskContext.Provider>

            </MainCard>
        </>
    );
}

TasksPage.layout = (page) => {
    return <MainLayout>{page}</MainLayout>;
};

