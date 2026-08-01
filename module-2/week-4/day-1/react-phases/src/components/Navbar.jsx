import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <h1>Fetching Data</h1>
      <section>
        <NavLink to="/"> Quotes</NavLink>
        <NavLink to="/random-quote"> Random Quote</NavLink>
        <NavLink to="/recipes">Recipe List Page</NavLink>
      </section>
    </nav>
  );
}
export default Navbar;
