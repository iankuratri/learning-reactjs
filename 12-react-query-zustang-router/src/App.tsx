import { useReducer } from "react";
import "./App.css";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import taskReducer from "./state-management/reducers/taskReducer";
import TaskContext from "./state-management/contexts/taskContext";
import authReducer from "./state-management/reducers/authReducer";
import AuthContext from "./state-management/contexts/authContext";

function App() {
  const [tasks, dispatchTask] = useReducer(taskReducer, []);
  const [username, dispatchAuth] = useReducer(authReducer, "");

  return (
    <AuthContext.Provider value={{ username, dispatch: dispatchAuth }}>
      <TaskContext.Provider value={{ tasks, dispatch: dispatchTask }}>
        <NavBar />
        <HomePage />
      </TaskContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
