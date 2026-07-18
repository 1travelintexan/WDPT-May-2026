import { useState } from "react";
import "./App.css";

function App() {
  const user1 = "Joao";
  //this is a state
  const [user, setUser] = useState("Moises");
  const [count, setCount] = useState(0);
  const [pets, setPets] = useState([
    { id: 1, name: "Ragnar", type: "Dog", gender: "male" },
    { id: 2, name: "Rogue", type: "Cat", gender: "female" },
    { id: 3, name: "Lola", type: "Dog", gender: "female" },
  ]);
  function handleAddOne() {
    console.log("the button was clicked", count);
    setCount(count + 1);
  }

  //function to delete a pet
  function handleDeletePet(petId) {
    console.log("pet deleted", petId);

    //filter the pets to only the pets without that id
    const filteredPets = pets.filter((pet) => {
      if (pet.id !== petId) {
        return true;
      } else {
        return false;
      }
    });

    //always make sure to use the setter to update the new values
    setPets(filteredPets);
    //send the data to the DB to update too
  }

  return (
    <>
      <h1>Hello {user}</h1>
      <p>Count is: {count}</p>
      <button onClick={handleAddOne}>Add One</button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Subtract One
      </button>
      <h2>Pets:</h2>

      {pets.map((currentPet) => {
        return (
          <div
            key={currentPet.id}
            style={{ border: "1px solid white", margin: "5px" }}
          >
            <p>Name: {currentPet.name}</p>
            {/* This is a ternary in React  */}
            <p>Type: {currentPet.type === "Dog" ? "🐶" : "😾"}</p>
            <p>Gender: {currentPet.gender === "female" && "💪"}</p>
            <button
              onClick={() => {
                handleDeletePet(currentPet.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
}

export default App;
