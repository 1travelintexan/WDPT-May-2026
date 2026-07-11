const Navbar = ({ pizza, name, age }) => {
  //destructuring in the JS Land
  //  const { name, age, pizza } = props;

  return (
    <nav>
      <h3>
        {name}'s Navbar and he is {age} years old and loves {pizza}
      </h3>
    </nav>
  );
};
export default Navbar;
