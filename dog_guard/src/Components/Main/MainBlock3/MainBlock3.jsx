import React from "react";
import OfferCard from "./OfferCard";

const offer__properties1 = [
  "Систему відеоспостереження",
  "Сигналізація",
  "Захист служби охорони",
];

export default function MainBlock3() {
  return (
    <section className="main__container3">
      <div className="_container main__block3">
        <div className="block3__offers">
          <h2 className="body__title">Пропозиції</h2>
          <OfferCard
            title={"Пакет «Безпечна квартира»"}
            properties={offer__properties1}
          />
        </div>
      </div>
    </section>
  );
}
