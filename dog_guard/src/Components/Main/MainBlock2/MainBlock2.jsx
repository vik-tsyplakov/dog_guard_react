import React from "react";
import security from "./../../../img/main/block2/security1.jpg";

export default function MainBlock2() {
  return (
    <section className="main__container2">
      <div className="_container main__block2">
        <div className="block2__about">
          <div className="about__text">
            <h2 className="body__title">Про нас </h2>
            <p className="body__text">
              DogGuard піклується про безпеку. Вже понад 10 років сотні компаній
              і тисячі людей сплять спокійно, адже є нашими клієнтами.
            </p>
          </div>
          <img className="about__img" src={security} alt="security" />
        </div>
      </div>
    </section>
  );
}
