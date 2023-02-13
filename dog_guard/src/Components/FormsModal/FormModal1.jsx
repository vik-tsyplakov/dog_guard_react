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
        <h2 className="body__title modal__title">Відчуйте реальну безпеку</h2>
        <form action="" className={cl.formsModal__registration}>
          <p className={cl.formsModal__titleHint}>Ваше ім’я</p>
          <div className={cl.formsModal__input}>
            <Input hint={"Іван  Сергійович"} />
          </div>
          <p className={cl.formsModal__titleHint}>Ваш номер телефону</p>
          <div className={cl.formsModal__input}>
            <Input hint={"Почніть з +38 "} className={cl.formsModal__input} />
          </div>
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
