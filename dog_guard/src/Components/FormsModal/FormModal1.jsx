import React, { useState } from "react";
import ButtonClose from "../UI/Buttons/ButtonClose";
import Input from "../UI/Input/Input";
import Checkbox from "../UI/Checkbox/Checkbox";
import cl from "./FormsModal.module.css";
import ButtonModal from "../UI/Buttons/ButtonModal";
import ButtonDisabled from "../UI/Buttons/ButtonDisabled";

export default function FormModal1(props) {
  const checked = false;
  const defaultChecked = checked ? checked : false;
  const [isChecked, setIsChecked] = useState(defaultChecked);

  return (
    <div className={cl.formsModal__container}>
      <div className={cl.formsModal__closeButton}>
        <ButtonClose
          onClick={() => {
            props.setModal(false);
          }}
        />
      </div>
      <div className={cl.formsModal__content}>
        <h2 className="body__title">Відчуйте реальну безпеку</h2>
        <form action="" className={cl.formsModal__registration}>
          <p htmlFor="">Ваше ім’я</p>
          <Input hint={"Іван  Сергійович"} />
          <p htmlFor="">Ваш номер телефону</p>
          <Input hint={"Почніть з +38 "} />
          <div className={cl.formsModal__confirmation}>
            <Checkbox
              label={"Погоджуюсь з "}
              terms={"умовами сервісу."}
              setIsChecked={setIsChecked}
              isChecked={isChecked}
              path={props.privacyPolicy}
            />
          </div>
          {isChecked ? (
            <ButtonModal text={"Зареєструватись"} />
          ) : (
            <ButtonDisabled text={"Зареєструватись"} disabled={true} />
          )}
        </form>
      </div>
    </div>
  );
}
