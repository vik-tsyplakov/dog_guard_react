import React from "react";
import cl from "./Button.module.css";

export default function ButtonDefault(props) {
  return (
    <button type="button" onClick={props.onClick} className={cl.button}>
      {props.text}
    </button>
  );
}
