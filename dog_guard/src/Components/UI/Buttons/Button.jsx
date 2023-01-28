import React from "react";
import cl from "./Button.module.css";

export default function Button(props) {
  return (
    <button class={cl.button}>
      <a href="#">{props.text}</a>
    </button>
  );
}
