// import logo from "./logo.svg";
import "./App.css";
import "./Dictionary.css";
import Dictionary from "./Dictionary";

function App() {
  function setTheme(themeName) {
    localStorage.setItem("theme", themeName);
  }

  return (
    <div className="App">
      <header>
        <div className="Shapes">
          <div className="Circle Shape"></div>
        </div>
        <div className="Info-wrapper">
          <div className="Introduction">
            <p>Dictionary</p>
          </div>
          <div className="Time">
            <p className="Hour">Wed 16:28:49</p>
          </div>
        </div>
        <div className="Shapes">
          <div className="Square Shape"></div>
        </div>
      </header>
      <main>
        <Dictionary defaultKeyword="Mycelium" />
      </main>
    </div>
  );
}

export default App;
