import React from "react";
import ButtonClose from "../UI/Buttons/ButtonClose";
import cl from "./FormsModal.module.css";

export default function FormModal1(props) {
  return (
    <div className={cl.formsModal__container}>
      <div className={cl.formsModal__closeButton}>
        <ButtonClose
          onClick={() => {
            props.setModal(false);
          }}
        />
      </div>
    </div>
  );
}
