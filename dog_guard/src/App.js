import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
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
    </div>
  );
}

export default App;
