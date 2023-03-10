import React from "react";
import cl from "./Button.module.css";

export default function ButtonMenu(props) {
  return (
    <button
      className={cl.button + " " + cl.button_menu}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}
