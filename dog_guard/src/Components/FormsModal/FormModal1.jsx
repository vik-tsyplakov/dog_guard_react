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
  const [valueName, setValueName] = useState("");
  let submitFn = (e) => {
    e.preventDefault();
    alert(`submit ${valueName}`);
  };

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
        <form className={cl.formsModal__registration} onSubmit={submitFn}>
          <p className={cl.formsModal__titleHint}>Ваше ім’я</p>
          <div className={cl.formsModal__input}>
            <Input
              hint={"Іван  Сергійович"}
              type="text"
              pattern="^[а-яА-ЯёЁa-zA-Z-а-щА-ЩЬьЮюЯяЇїІіЄєҐґ+\s]+$"
              required={"required"}
              // value={valueName}
            />
          </div>
          <p className={cl.formsModal__titleHint}>Ваш номер телефону</p>
          <div className={cl.formsModal__input}>
            <Input
              hint={"Почніть з +380 "}
              type="tel"
              className={cl.formsModal__input}
              pattern="^(\+380|)[0-9]{9}$"
              minlength={13}
              maxlength={13}
              required={"required"}
            />
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
            <ButtonModal text={"Зареєструватись"} type={"submit"} />
          ) : (
            <ButtonDisabled text={"Зареєструватись"} disabled={true} />
          )}
        </form>
      </div>
    </div>
  );
}
