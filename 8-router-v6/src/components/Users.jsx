import { Outlet, useNavigate, useSearchParams } from "react-router-dom";

const Users = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";

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

      <div>
        <button onClick={() => setSearchParams({ filter: "active" })}>
          Active Users
        </button>
        <button onClick={() => setSearchParams({})}>Reset Filter</button>
      </div>

      {showActiveUsers ? (
        <h3>Showing active users</h3>
      ) : (
        <h3>Showing all users</h3>
      )}
    </div>
  );
};

export default Users;
