import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";

const Navbar = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);
  return (
    <nav>
      <NavLink to={`/`}>Product List</NavLink>
      <NavLink to={`/create-a-product`}>Create a Product</NavLink>
      <button onClick={() => setDarkTheme(!darkTheme)}>
        {darkTheme === true ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
};
export default Navbar;
