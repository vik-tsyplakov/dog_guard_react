import "./App.css";
import Button from "./Components/UI/Buttons/Button";

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <p> Надійний захист будівлі</p>
        <Button text={"Захистити себе"} />
      </header>
    </div>
  );
}

export default App;
