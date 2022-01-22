import { Outlet } from "react-router-dom";

const Users = () => {
  return (
    <div>
      <h2>User 1</h2>
      <h2>User 2</h2>
      <h2>User 3</h2>
      <Outlet />
    </div>
  );
};

export default Users;
