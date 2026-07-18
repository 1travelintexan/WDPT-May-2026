import { Link } from "react-router-dom";

const HomePage = ({ pets }) => {
  return (
    <div>
      <h1>Home Page</h1>
      {pets.map((onePet) => {
        return (
          <h3 key={onePet.id}>
            Name: <Link to={`/pet/${onePet.id}`}>{onePet.name}</Link>
          </h3>
        );
      })}
    </div>
  );
};
export default HomePage;
