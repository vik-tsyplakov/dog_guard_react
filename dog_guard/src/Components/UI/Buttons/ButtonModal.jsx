import React from "react";
import cl from "./Button.module.css";

export default function ButtonModal(props) {
  return (
    <a href={props.path}>
      <div className={cl.button + " " + cl.button_modal}>{props.text}</div>
    </a>
  );
}
