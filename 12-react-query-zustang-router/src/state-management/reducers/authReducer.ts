interface Action {
  type: "LOGIN" | "LOGOUT";
  username: string;
}

const authReducer = (state: string, action: Action): string => {
  const { type, username } = action;

  if (type === "LOGIN") return username;
  if (type === "LOGOUT") return "";

  return state;
};

export default authReducer;
