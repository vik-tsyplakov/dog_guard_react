import React from "react";
import cl from "./Button.module.css";

export default function ButtonDisabled(props) {
  return (
    <button disabled={true} className={cl.button + " " + cl.button_modal}>
      {props.text}
    </button>
  );
}
