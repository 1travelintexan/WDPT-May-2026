// src/App.jsx
import "./App.css";
import discordImg from "./assets/discord-logo-white.png";
import hamburgerIcon from "./assets/menu-icon.png";
import backgroundImg from "./assets/discord-background.png";

function App() {
  return (
    <div className="App">
      <nav>
        <img alt="discord-logo" src={discordImg} />
        <img alt="hambuger-icon" src={hamburgerIcon} />
      </nav>
      <main>
        <h1>imagine a place...</h1>
        <p>
          ...alkj aldfkjal ikja sdflkj lasdfkjadflf kjasdf lkjadsflk jaflk
          jasdfl kjdfalkdfalkjasdflk jasdflkjfl dkjfadlkj alkj aldfkjal ikja
          safdfa aasd fa
        </p>
        <div id="btn-container">
          <button>Download for Mac</button>
          <button id="discord-btn">Open Discord in your Browser</button>
        </div>
      </main>
      <img
        alt="background-image"
        src={backgroundImg}
        className="background-img"
      />
    </div>
  );
}

export default App;
