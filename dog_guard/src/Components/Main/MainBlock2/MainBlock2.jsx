import React from "react";
import security from "./../../../img/main/block2/security1.jpg";
import cctv_camera from "./../../../img/main/block2/cctv_camera.jpg";
import icon_alarms from "./../../../img/main/block2/icon_alarms.svg";
import icon_camera from "./../../../img/main/block2/icon_camera.svg";
import icon_dog from "./../../../img/main/block2/icon_dog.svg";
import icon_security_service from "./../../../img/main/block2/icon_security_service.svg";

export default function MainBlock2() {
  return (
    <section className="main__container2">
      <div className="_container main__block2">
        <div className="block2__about">
          <div className="about__text">
            <h2 className="body__title">Про нас</h2>
            <p className="body__text">
              DogGuard піклується про безпеку. Вже понад 10 років сотні компаній
              і тисячі людей сплять спокійно, адже є нашими клієнтами.
            </p>
          </div>
          <img className="about__img" src={security} alt="security" />
        </div>
        <div className="block2__possibility">
          <div className="possibility__text">
            <h2 className="body__title">Можливості</h2>
            <div className="possibility__items">
              <div className="possibility__item">
                <img src={icon_camera} className="icon1" alt="cctv camera" />
                <p className="body__text">Система спостереження</p>
              </div>
              <div className="possibility__item">
                <img
                  src={icon_security_service}
                  className="icon2"
                  alt="security service"
                />
                <p className="body__text">Власна служба охорони</p>
              </div>
              <div className="possibility__item">
                <img src={icon_dog} className="icon3" alt="guard dogs" />
                <p className="body__text">
                  Собаки, що допомогають нам захищати вашу оселю
                </p>
              </div>
              <div className="possibility__item">
                <img src={icon_alarms} className="icon4" alt="alarms" />
                <p className="body__text">Сигналізація</p>
              </div>
            </div>
          </div>
          <img
            className="possibility__img"
            src={cctv_camera}
            alt="cctv camera"
          />
        </div>
      </div>
    </section>
  );
}
