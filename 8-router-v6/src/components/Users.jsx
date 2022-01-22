import { Outlet, useNavigate } from "react-router-dom";

const Users = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2 className="clickable" onClick={() => navigate("1")}>
        User 1
      </h2>
      <h2 className="clickable" onClick={() => navigate("2")}>
        User 2
      </h2>
      <h2 className="clickable" onClick={() => navigate("3")}>
        User 3
      </h2>
      <Outlet />
    </div>
  );
};

export default Users;
