import React from "react";
import cl from "./Button.module.css";

export default function ButtonModalGrey(props) {
  return (
    <button className={cl.button + " " + cl.button_modalGrey}>
      {props.text}
    </button>
  );
}
