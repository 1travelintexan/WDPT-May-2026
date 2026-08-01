import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to={`/`}>Product List</NavLink>
      <NavLink to={`/create-a-product`}>Create a Product</NavLink>
    </nav>
  );
};
export default Navbar;
