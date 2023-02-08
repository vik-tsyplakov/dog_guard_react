import React from "react";
import cl from "./Button.module.css";

export default function ButtonOpenModal(props) {
  return (
    <button
      type="button"
      onClick={props.onClick}
      className={cl.button + " " + cl.button_openModal}
    >
      {props.text}
    </button>
  );
}
