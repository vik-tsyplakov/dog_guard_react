import React from "react";
import ButtonOpenModal from "../UI/Buttons/ButtonOpenModal";
import ButtonMenu from "../UI/Buttons/ButtonMenu";
import "./../../App.css";
import logo from "./../../img/header/logo.svg";
import phone from "./../../img/header/phone.svg";

export default function Header(props) {
  return (
    <header className="header__container">
      <div className="header__content _container">
        <div className="header__logo">
          <a href="#">
            <img src={logo} alt="logo dog" />
            <span className="logo__text">
              DOG <br />
              GUARD
            </span>
          </a>
        </div>
        <div className="header__info">
          <nav>
            <ul className="header__nav">
              <li>
                <a className="body__text link" href="#">
                  Пакети
                </a>
              </li>
              <li>
                <a className="body__text link" href="#">
                  Партнери
                </a>
              </li>
              <li>
                <a className="body__text link" href="#">
                  Новини
                </a>
              </li>
            </ul>
          </nav>
          <div className="header__phone">
            <a href="tel:+380981110011">
              <img src={phone} alt="phone" />
              <span className="phone__num body__text link">
                + 380 98 111 00 11
              </span>
            </a>
          </div>
          <div className="header__buttonOpenModal">
            <ButtonOpenModal
              onClick={() => {
                props.setModal(true);
              }}
              text={"Захистити себе"}
            />
          </div>
          <div className="header__buttonMenu">
            <ButtonMenu text={"Меню"} />
          </div>
        </div>
      </div>
    </header>
  );
}
