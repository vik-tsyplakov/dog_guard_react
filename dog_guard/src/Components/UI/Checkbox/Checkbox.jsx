import React from "react";

import "./../.././../App.css";
import cl from "./Checkbox.module.css";

export default function Checkbox({ ...props }) {
  return (
    <>
      <div className={[cl.checkbox__wrapper, "body__text"].join(" ")}>
        <label>
          <input
            className={[cl.checkbox, props.isChecked ? cl.checked : ""].join(
              " "
            )}
            type="checkbox"
            onChange={() => props.setIsChecked((prev) => !prev)}
          />
          <span>{props.label}</span>
        </label>
        <span>
          <a
            href={props.path}
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            {props.terms}
          </a>
        </span>
      </div>
    </>
  );
}
