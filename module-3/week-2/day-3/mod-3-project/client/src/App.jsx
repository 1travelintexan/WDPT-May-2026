import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import { LoginPage } from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import PizzasPage from "./pages/PizzasPage";
import RouteGuard from "./components/RouteGuard";
function App() {
  const { logoutUser, currentUser } = useContext(AuthContext);

  return (
    <>
      <nav>
        <h1>Full Stack Project</h1>
        {currentUser ? <button onClick={logoutUser}>Logout</button> : null}
      </nav>
      {/* routes */}
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/profile"
          element={
            <RouteGuard>
              <ProfilePage />
            </RouteGuard>
          }
        />
        <Route
          path="/pizzas"
          element={
            <RouteGuard>
              <PizzasPage />
            </RouteGuard>
          }
        />
      </Routes>
    </>
  );
}

export default App;
