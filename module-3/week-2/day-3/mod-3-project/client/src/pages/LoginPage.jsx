import { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const nav = useNavigate();

  const { setCurrentUser, setIsLoading, setIsLoggedIn } =
    useContext(AuthContext);

  async function handleLogin(event) {
    event.preventDefault();
    const formUser = { email, password };
    try {
      const { data } = await axios.post(
        "http://localhost:5005/auth/login",
        formUser,
      );
      console.log("user logged in,  in DB", data);
      //before going to /profile, store the authToken
      localStorage.setItem("authToken", data.authToken);
      //before going to profile page, set all states for the currentUser
      setCurrentUser(data.foundUser);
      setIsLoading(false);
      setIsLoggedIn(true);
      nav("/profile");
    } catch (error) {
      console.log(error);
      setError(error.response.data.errorMessage);
    }
  }

  return (
    <div>
      <h2>Login here:</h2>
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input
          type="email"
          placeholder="johndoe@gmail.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label>Password:</label>
        <input
          type="password"
          placeholder="*******"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button>Login</button>
      </form>
      <p>
        New Here? <Link to={`/`}>Sign up with us</Link>{" "}
      </p>
      <p className="error">{error}</p>
    </div>
  );
};
