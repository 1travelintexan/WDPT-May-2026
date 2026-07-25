import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1>Form Day</h1>
      <Link to={"/"}>
        <button>Pet List</button>
      </Link>
      <Link to={"/add-a-pet"}>
        <button>Add a Pet</button>
      </Link>
    </nav>
  );
};
export default Navbar;
