import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const nav = useNavigate();
  async function handleSignup(event) {
    event.preventDefault();
    const formUser = { username, email, password };
    try {
      const newUserInDB = await axios.post(
        "http://localhost:5005/auth/signup",
        formUser,
      );
      console.log("user created in DB", newUserInDB);
      nav("/login");
    } catch (error) {
      console.log(error.response.data.errorMessage);
      setError(error.response.data.errorMessage);
    }
  }

  return (
    <div>
      <h2>Signup with us</h2>
      <form onSubmit={handleSignup}>
        <label>Username:</label>
        <input
          type="text"
          placeholder="John Doe"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
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
        <button>Signup</button>
      </form>
      <p>
        Already a member? <Link to={`/login`}>Login</Link>{" "}
      </p>
      <p className="error">{error}</p>
    </div>
  );
};
export default SignupPage;
