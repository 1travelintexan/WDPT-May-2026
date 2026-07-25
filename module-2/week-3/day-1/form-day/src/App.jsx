import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import PetsListPage from "./pages/PetsListPage";
import AddPetPage from "./pages/AddPetPage";
import { v4 as uuidv4 } from "uuid";
function App() {
  const [pets, setPets] = useState([
    { id: uuidv4(), name: "Ragnar", age: 5 },
    { id: uuidv4(), name: "Buddy", age: 12 },
    { id: uuidv4(), name: "Lola", age: 7 },
  ]);
  function handleDeletePet(petId) {
    const filteredPets = pets.filter((onePet) => {
      if (onePet.id !== petId) {
        return true;
      }
    });
    setPets(filteredPets);
  }
  function handleSortPets() {
    const clonePets = JSON.parse(JSON.stringify(pets));
    clonePets.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else if (a.name < b.name) {
        return -1;
      } else {
        return 0;
      }
    });
    console.log(clonePets);
    setPets(clonePets);
  }
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PetsListPage
              pets={pets}
              handleDeletePet={handleDeletePet}
              handleSortPets={handleSortPets}
            />
          }
        />
        <Route
          path="/add-a-pet"
          element={<AddPetPage setPets={setPets} pets={pets} />}
        />
      </Routes>
    </>
  );
}

export default App;
