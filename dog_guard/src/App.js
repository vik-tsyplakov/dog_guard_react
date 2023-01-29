import "./App.css";
import ButtonCTA from "./Components/UI/Buttons/ButtonCTA";
import ButtonDefault from "./Components/UI/Buttons/ButtonDefault";
import ButtonDisabled from "./Components/UI/Buttons/ButtonDisabled";
import ButtonModal from "./Components/UI/Buttons/ButtonModal";
import ButtonModalGrey from "./Components/UI/Buttons/ButtonModalGrey";
import ButtonProposition from "./Components/UI/Buttons/ButtonProposition";

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <p> Надійний захист будівлі</p>
        <ButtonDefault text={"Захистити себе"} />
        <ButtonProposition text={"Обрати"} />
        <ButtonCTA text={"Дізнатися більше"} path={"#"} />
        <ButtonModal text={"Зареєструватись"} />
        <ButtonDisabled text={"Зареєструватись"} disabled={true} />
        <ButtonModalGrey text={"Повернутись до форми реєстрації"} />
      </header>
    </div>
  );
}

export default App;
