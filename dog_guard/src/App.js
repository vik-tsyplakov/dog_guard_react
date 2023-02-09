import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import ButtonClose from "./Components/UI/Buttons/ButtonClose";
import ButtonDisabled from "./Components/UI/Buttons/ButtonDisabled";
import ButtonModal from "./Components/UI/Buttons/ButtonModal";
import ButtonModalGrey from "./Components/UI/Buttons/ButtonModalGrey";
import Checkbox from "./Components/UI/Checkbox/Checkbox";
import Input from "./Components/UI/Input/Input";
import Modal from "./Components/UI/Modal/Modal";

function App() {
  const privacyPolicy =
    "https://www.freeprivacypolicy.com/live/edb06eb5-b70c-400a-b53a-5ae32a1ada39";

  const [modal, setModal] = useState(false);
  const openModal = () => {
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
      <Header setModal={setModal} />
      <Main />
      <div>
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
      </div>
    </div>
  );
}

export default App;
