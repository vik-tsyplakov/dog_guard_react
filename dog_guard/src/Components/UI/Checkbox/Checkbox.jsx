import React from "react";
import { useState } from "react";
import "./../.././../App.css";
import cl from "./Checkbox.module.css";

export default function Checkbox({ label, checked, ...props }) {
  const defaultChecked = checked ? checked : false;
  const [isChecked, setIsChecked] = useState(defaultChecked);

  return (
    <>
      <div className={[cl.checkbox__wrapper, "body__text"].join(" ")}>
        <label>
          <input
            className={[cl.checkbox, isChecked ? cl.checked : ""].join(" ")}
            type="checkbox"
            onChange={() => setIsChecked((prev) => !prev)}
            {...props}
          />
          <span>{label}</span>
        </label>
        <span>
          <a href={props.path} target="_blank" className="link">
            {props.terms}
          </a>
        </span>
      </div>
      <p>{isChecked ? "Selected" : "Unchecked"}</p>
    </>
  );
}
