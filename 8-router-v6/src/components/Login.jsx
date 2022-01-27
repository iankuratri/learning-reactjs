import { useState } from "react";
import { useAuth } from "../utils/auth";
import { useLocation, useNavigate } from "react-router-dom";

export const Login = () => {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.path || "/";

  const handleLogin = () => {
    auth.login(user);
    navigate(redirectPath, { replace: true });
  };

  return (
    <>
      <div>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={(e) => setUser(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </>
  );
};
