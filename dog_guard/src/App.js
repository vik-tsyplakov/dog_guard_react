import "./App.css";
import ButtonDefault from "./Components/UI/Buttons/ButtonDefault";

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <p> Надійний захист будівлі</p>
        <ButtonDefault text={"Захистити себе"} path={"#"} />
      </header>
    </div>
  );
}

export default App;
