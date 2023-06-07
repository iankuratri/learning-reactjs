interface Task {
  id: number;
  title: string;
}

interface Action {
  type: "ADD" | "REMOVE";
  payload: Task;
}

const taskReducer = (state: Task[], action: Action): Task[] => {
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
