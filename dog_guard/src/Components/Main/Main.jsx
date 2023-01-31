import React from "react";
import ButtonCTA from "../UI/Buttons/ButtonCTA";
import "./../../App.css";
import background from "./../../img/main/background_main.png";
import scroll_button from "./../../img/main/scroll_button.svg";

export default function Main(props) {
  return (
    <main className="main__container">
      <section className="_container main__block1">
        <img className="block1__background" src={background} alt="camera" />
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
      </section>
    </main>
  );
}
