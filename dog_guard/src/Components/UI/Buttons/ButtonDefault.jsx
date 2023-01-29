import React from "react";
import cl from "./Button.module.css";

export default function ButtonDefault(props) {
  return <button className={cl.button}>{props.text}</button>;
}
