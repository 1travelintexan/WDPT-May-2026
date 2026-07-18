import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/profile?best-pet=Ragnar&second-best=Lola">Profile</NavLink>
    </nav>
  );
};
export default Navbar;
