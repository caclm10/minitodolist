import { createContext, useContext } from "react";

export const TaskContext = createContext({
    todoId: 0
});

export function useTask() {
    return useContext(TaskContext);
}
