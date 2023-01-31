import { useState } from "react";
import "./App.css";
import ButtonClose from "./Components/UI/Buttons/ButtonClose";
import ButtonCTA from "./Components/UI/Buttons/ButtonCTA";
import ButtonDefault from "./Components/UI/Buttons/ButtonDefault";
import ButtonDisabled from "./Components/UI/Buttons/ButtonDisabled";
import ButtonModal from "./Components/UI/Buttons/ButtonModal";
import ButtonModalGrey from "./Components/UI/Buttons/ButtonModalGrey";
import ButtonProposition from "./Components/UI/Buttons/ButtonProposition";
import Checkbox from "./Components/UI/Checkbox/Checkbox";
import Input from "./Components/UI/Input/Input";
import Modal from "./Components/UI/Modal/Modal";

function App() {
  const privacyPolicy =
    "https://www.freeprivacypolicy.com/live/edb06eb5-b70c-400a-b53a-5ae32a1ada39";

  const [modal, setModal] = useState(false);
  const openModal = () => {
    console.log("ddffdfdf");
    setModal(false);
  };

  const Form = (props) => {
    return (
      <div style={{ background: "red", height: "300px", width: "300px" }}>
        dcdcd
      </div>
    );
  };

  return (
    <div className="app">
      <header className="app__header">
        <p> Надійний захист будівлі</p>
        <ButtonDefault onClick={() => setModal(true)} text={"Захистити себе"} />
        <ButtonProposition text={"Обрати"} />
        <ButtonCTA text={"Дізнатися більше"} path={"#"} />
        <ButtonModal text={"Зареєструватись"} />
        <ButtonDisabled text={"Зареєструватись"} disabled={true} />
        <ButtonModalGrey text={"Повернутись до форми реєстрації"} />
        <ButtonClose />
        <Input hint={"Почніть з +38 "} />
        <Checkbox
          label={"Погоджуюсь з "}
          terms={"умовами сервісу."}
          checked={false}
          path={privacyPolicy}
        />

        <Modal visible={modal} setVisible={setModal}>
          <Form setVisible={setModal} />
        </Modal>
      </header>
    </div>
  );
}

export default App;
