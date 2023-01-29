import React from "react";
import cl from "./Button.module.css";

export default function ButtonDisabled(props) {
  return (
    <button
      disabled={props.disabled}
      className={cl.button + " " + cl.button_modal}
    >
      {props.text}
    </button>
  );
}
