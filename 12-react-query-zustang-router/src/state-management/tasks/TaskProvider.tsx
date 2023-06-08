import { ReactNode, useReducer } from "react";
import TaskContext from "./taskContext";
import taskReducer from "./taskReducer";

interface TaskProviderType {
  children: ReactNode;
}

const TaskProvider = ({ children }: TaskProviderType) => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
