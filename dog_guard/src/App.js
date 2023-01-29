import "./App.css";
import ButtonDefault from "./Components/UI/Buttons/ButtonDefault";
import ButtonProposition from "./Components/UI/Buttons/ButtonProposition";

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <p> Надійний захист будівлі</p>
        <ButtonDefault text={"Захистити себе"} path={"#"} />
        <ButtonProposition text={"Обрати"} path={"#"} />
      </header>
    </div>
  );
}

export default App;
