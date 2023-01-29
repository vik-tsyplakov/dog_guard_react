import React from "react";
import cl from "./Button.module.css";

export default function ButtonDefault(props) {
  return (
    <a href={props.path}>
      <div className={cl.button}>{props.text}</div>
    </a>
  );
}
