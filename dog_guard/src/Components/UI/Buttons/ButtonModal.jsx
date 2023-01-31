import React from "react";
import cl from "./Button.module.css";

export default function ButtonModal(props) {
  return (
    <button
      className={cl.button + " " + cl.button_modal}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}
