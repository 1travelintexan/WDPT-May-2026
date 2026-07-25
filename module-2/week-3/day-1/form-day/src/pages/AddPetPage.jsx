import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const AddPetPage = ({ setPets, pets }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const nav = useNavigate();
  function handleAddPet(event) {
    //first thing when submitting a form in React... stop the refresh
    event.preventDefault();
    const newPet = { id: uuidv4(), name, age };
    setPets([newPet, ...pets]);
    //navigate to the list page
    nav("/");
  }

  return (
    <form onSubmit={handleAddPet}>
      <h2>Create a Pet to add</h2>
      <label>
        Pet Name:
        <input
          placeholder="type a name please"
          required
          type="text"
          value={name}
          onChange={(event) => {
            console.log(event);
            setName(event.target.value);
          }}
        />
      </label>
      <label>
        Pet Age:
        <input
          placeholder="age please"
          type="number"
          value={age}
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
      </label>
      <button>Submit</button>
    </form>
  );
};
export default AddPetPage;
