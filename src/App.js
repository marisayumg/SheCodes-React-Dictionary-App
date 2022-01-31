// import logo from "./logo.svg";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Dictionary App</p>
      </header>
      <main>
        <Dictionary defaultKeyword="Mycelium" />
      </main>
      <footer>
        <p>
          <a
            href="https://github.com/marisayumg/dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source
          </a>{" "}
          code by{" "}
          <a
            href="https://github.com/marisayumg"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Marisa Gama
          </a>
        </p>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </footer>
    </div>
  );
}

export default App;
