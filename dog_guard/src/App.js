import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
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
