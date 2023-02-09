import React from "react";
import OfferCard from "./OfferCard";

const offer__properties1 = [
  "Систему відеоспостереження",
  "Сигналізація",
  "Захист служби охорони",
];

const offer__properties2 = [
  "Систему відеоспостереження для будинку",
  "Сигналізація",
  "Захист служби охорони",
  "Базовий комплект бездротового обладнання",
];

const offer__properties3 = [
  "Монтаж та підключення системи охорони",
  "Систему розпізнавання облич",
  "Систему розпізнавання неправильного паркування",
  "Захист служби охорони",
];

export default function MainBlock3() {
  return (
    <section className="main__container3">
      <div className="_container main__block3">
        <div className="block3__offers">
          <h2 className="body__title">Пропозиції</h2>
          <div className="block3__cards">
            <OfferCard
              title={"Пакет «Безпечна квартира»"}
              properties={offer__properties1}
              price={1000}
            />
            <OfferCard
              title={"Пакет «Безпечний будинок»"}
              properties={offer__properties2}
              price={5000}
            />
            <OfferCard
              title={"Пакет «Безпечний офіс»"}
              properties={offer__properties3}
              price={10000}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
