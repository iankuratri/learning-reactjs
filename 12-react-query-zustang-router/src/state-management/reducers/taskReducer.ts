export interface Task {
  id: number;
  title: string;
}

export interface TaskAction {
  type: "ADD" | "REMOVE";
  payload: Task;
}

const taskReducer = (state: Task[], action: TaskAction): Task[] => {
  const { type, payload } = action;

  switch (type) {
    case "ADD":
      return [payload, ...state];

    case "REMOVE":
      return state.filter((t) => t.id !== payload.id);

    default:
      return state;
  }
};

export default taskReducer;
