import { useContext } from "react";
import TaskContext from "./contexts/taskContext";

const TaskList = () => {
  const { tasks, dispatch } = useContext(TaskContext);

  return (
    <>
      <button
        onClick={() =>
          dispatch({
            type: "ADD",
            payload: { id: Date.now(), title: "Task " + Date.now() },
          })
        }
        className="btn btn-primary my-3"
      >
        Add Task
      </button>
      <ul className="list-group">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span className="flex-grow-1">{task.title}</span>
            <button
              className="btn btn-outline-danger"
              onClick={() =>
                dispatch({
                  type: "REMOVE",
                  payload: task,
                })
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
