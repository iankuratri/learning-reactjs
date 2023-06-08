import { ReactNode, useReducer } from "react";
import TaskContext from "./contexts/taskContext";
import taskReducer from "./reducers/taskReducer";

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
