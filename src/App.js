// import logo from "./logo.svg";
import "./App.css";
import "./Dictionary.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header>
        <div className="Shapes">
          <div className="Circle Shape"></div>
        </div>
        <div className="Info-wrapper">
          <div className="Introduction">
            <p className="serif">Dictionary</p>
          </div>
          <div className="Time serif">
            <p className="Hour">Wed — 16:28:49</p>
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
