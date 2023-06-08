import { Dispatch, createContext } from "react";
import { Task, TaskAction } from "./taskReducer";

interface TaskContextType {
  tasks: Task[];
  dispatch: Dispatch<TaskAction>;
}

const TaskContext = createContext<TaskContextType>({} as TaskContextType);

export default TaskContext;
