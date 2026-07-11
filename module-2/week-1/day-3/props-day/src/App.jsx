import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  const person = "Samantha";
  return (
    <>
      {/* calling a component to use it  */}
      <Navbar name={"Moises"} age={5} pizza={"pepp"} />
      <Navbar name={"JC"} age={15} />
      <Navbar name={"Joao"} age={20} />
      <main>
        <h1>Props Day</h1>
      </main>
      {/* calling the footer component to use it  */}
      <Footer user={person} />
    </>
  );
}

export default App;
