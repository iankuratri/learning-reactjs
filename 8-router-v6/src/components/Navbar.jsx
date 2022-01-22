import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="primary-nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
};

export default Navbar;
