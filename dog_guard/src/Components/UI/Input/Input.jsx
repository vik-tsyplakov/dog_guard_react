import React from "react";
import cl from "./Input.module.css";

export default function Input(props) {
  return <input className={cl.myInput} placeholder={props.hint} />;
}
