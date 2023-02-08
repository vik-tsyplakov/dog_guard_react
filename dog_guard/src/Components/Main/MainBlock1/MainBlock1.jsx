import React from "react";
import scroll_button from "./../../../img/main/scroll_button.svg";
import ButtonCTA from "../../UI/Buttons/ButtonCTA";

export default function MainBlock1() {
  return (
    <section className="main__container1">
      <div className="_container main__block1">
        <div className="block1">
          <div className="block1__main">
            <h1 className="main__title block1__title">
              Надійний захист будівлі
            </h1>
            <h2 className="main__text">
              Цілодобовий запис з смарт-камер спостереження.
            </h2>
            <div className="block1__button">
              <ButtonCTA text={"Дізнатися більше"} path={"#"} />
            </div>
          </div>
          <div className="block1__footer">
            <div className="lang_container ">
              <span className="body__text lang lang_active">
                <a className="text_white" href="">
                  UA
                </a>
              </span>
              <span className="body__text lang">
                <a className="text_white" href="">
                  EN
                </a>
              </span>
            </div>
            <div className="scroll-button">
              <a className="body__text" href="">
                <img src={scroll_button} alt="Scroll down" />
                Прокрутіть вниз по деталі
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
