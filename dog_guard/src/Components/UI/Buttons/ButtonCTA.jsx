import React from "react";
import cl from "./Button.module.css";

export default function ButtonCTA(props) {
  return (
    <a href={props.path}>
      <button className={cl.button + " " + cl.button_cta}>{props.text}</button>
    </a>
  );
}
