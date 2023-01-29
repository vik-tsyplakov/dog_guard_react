import React from "react";
import cl from "./Button.module.css";
import icon_close from "./../../../img/modal/icon_close.svg";

export default function ButtonClose() {
  return (
    <button className={cl.button_close}>
      <img src={icon_close} alt="close" />
    </button>
  );
}
