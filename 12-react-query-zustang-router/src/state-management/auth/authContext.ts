import { Dispatch, createContext } from "react";
import { AuthAction } from "./authReducer";

interface AuthContextType {
  username: string;
  dispatch: Dispatch<AuthAction>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export default AuthContext;
