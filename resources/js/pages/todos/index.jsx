import { Head } from "@/components/head";
import { MainCard } from "@/components/main-card";
import { TodoList } from "@/components/todo-list";
import { TodoNewButton } from "@/components/todo-new-button";
import { MainLayout } from "@/layouts/main-layout";

export default function TodosPage({ todos }) {
    return (
        <>
            <Head title="Todos" />

            <MainCard title="Todos">
                <div className="flex justify-end">
                    <TodoNewButton />
                </div>

                <TodoList todos={todos} />
            </MainCard>
        </>
    );
}

TodosPage.layout = (page) => {
    return <MainLayout>{page}</MainLayout>;
};
