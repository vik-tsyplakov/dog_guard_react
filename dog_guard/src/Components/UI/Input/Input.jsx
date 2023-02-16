import React from "react";
import cl from "./Input.module.css";

export default function Input(props) {
  return (
    <input
      className={cl.myInput}
      placeholder={props.hint}
      maxlength={props.maxlength}
      minlength={props.minlength}
      pattern={props.pattern}
      required={props.required}
      type={props.type}
    />
  );
}
