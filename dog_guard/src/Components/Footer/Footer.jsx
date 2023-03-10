import React from "react";
import facebook from "./../../img/footer/facebook.svg";
import instagram from "./../../img/footer/instagram.svg";
import youtube from "./../../img/footer/youtube.svg";

export default function Footer() {
  return (
    <footer className="footer__container">
      <div className="_container">
        <div className="footer__content footer__text text_white ">
          <div className="footer__item ">2022 © Всі права захищено. </div>
          <div className="footer__item">
            Дизайн створено: <br />
            <a
              href="https://www.behance.net/alexandra_jang"
              className="link_footer"
              target="_blank"
              rel="noreferrer"
            >
              Циплаковою Олександрою
            </a>
          </div>
          <div className="footer__item">
            <div className="footer__social">
              <a href="/" target="_blank" rel="noreferrer">
                <img src={facebook} alt="facebook DogGuard" />
              </a>
              <a href="/" target="_blank" rel="noreferrer">
                <img src={instagram} alt="instagram DogGuard" />
              </a>
              <a href="/" target="_blank" rel="noreferrer">
                <img src={youtube} alt="youtube DogGuard" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
