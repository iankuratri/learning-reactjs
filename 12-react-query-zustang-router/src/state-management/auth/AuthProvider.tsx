import { ReactNode, useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [username, dispatch] = useReducer(authReducer, "");

  return (
    <AuthContext.Provider value={{ username, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
