import React from "react";
import cl from "./Button.module.css";

export default function ButtonProposition(props) {
  return (
    <a href={props.path}>
      <div className={cl.button + " " + cl.button_proposition}>
        {props.text}
      </div>
    </a>
  );
}
