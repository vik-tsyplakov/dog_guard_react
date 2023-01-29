import React from "react";
import cl from "./Button.module.css";

export default function ButtonProposition(props) {
  return (
    <button className={cl.button + " " + cl.button_proposition}>
      {props.text}
    </button>
  );
}
