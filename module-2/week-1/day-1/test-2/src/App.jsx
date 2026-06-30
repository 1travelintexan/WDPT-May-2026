import "./App.css";
//this is a comment in .jsx extension
import ragnarImg from "./assets/ragnar.webp";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

function App() {
  //this is Javascript land!!!
  const num = "55";
  const user = "Moises";
  const { width, height } = useWindowSize();
  return (
    <>
      <Confetti
        width={width}
        height={height}
        numberOfPieces={1000}
        wind={-0.05}
        colors={["blue", "white"]}
      />
      <h1>{user}'s Page!</h1>
      <p>This is a second thing</p>
      <img alt="me and ragnar" src={ragnarImg} className="ragnar-image" />
    </>
  );
}

export default App;
