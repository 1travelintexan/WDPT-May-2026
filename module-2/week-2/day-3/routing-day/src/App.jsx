import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import { useState } from "react";
import PetDetail from "./pages/PetDetail";

function App() {
  const petsArr = [
    {
      id: 1,
      name: "Ragnar",
      age: 5,
      owner: "Joshua",
    },
    {
      id: 2,
      name: "Lola",
      age: 5,
      owner: "Joao",
    },
    {
      id: 3,
      name: "Buddy",
      age: 12,
      owner: "Joshua",
    },
  ];
  const [pets, setPets] = useState(petsArr);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage pets={pets} />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* dynamic route  */}
        <Route path="/pet/:petId" element={<PetDetail pets={pets} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
