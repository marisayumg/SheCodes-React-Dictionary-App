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
        <Dictionary />
      </main>
      <footer>
        <p>Open-source code by Marisa Gama</p>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </footer>
    </div>
  );
}

export default App;
