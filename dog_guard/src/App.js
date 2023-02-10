import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import ButtonClose from "./Components/UI/Buttons/ButtonClose";
import ButtonDisabled from "./Components/UI/Buttons/ButtonDisabled";
import ButtonModal from "./Components/UI/Buttons/ButtonModal";
import ButtonModalGrey from "./Components/UI/Buttons/ButtonModalGrey";
import Input from "./Components/UI/Input/Input";
import Modal from "./Components/UI/Modal/Modal";
import FormModal1 from "./Components/FormsModal/FormModal1";

function App() {
  const privacyPolicy =
    "https://www.freeprivacypolicy.com/live/edb06eb5-b70c-400a-b53a-5ae32a1ada39";

  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(false);
  };

  return (
    <div className="app">
      <Header setModal={setModal} />
      <Main />
      <Footer />
      <div>
        <ButtonModal text={"Зареєструватись"} />
        <ButtonDisabled text={"Зареєструватись"} disabled={true} />
        <ButtonModalGrey text={"Повернутись до форми реєстрації"} />
        <Input hint={"Почніть з +38 "} />
        <Modal
          visible={modal}
          setVisible={setModal}
          privacyPolicy={privacyPolicy}
        >
          <FormModal1
            setVisible={setModal}
            setModal={setModal}
            privacyPolicy={privacyPolicy}
          />
        </Modal>
      </div>
    </div>
  );
}

export default App;
