import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <a className="active" href="#home">
          Home
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>

      <div className="content">..</div>
    </div>
  );
}

export default App;
