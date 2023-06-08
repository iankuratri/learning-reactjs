import LoginStatus from "./auth/LoginStatus";
import useTask from "./tasks/useTask";

const NavBar = () => {
  const { tasks } = useTask();

  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{tasks?.length}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
