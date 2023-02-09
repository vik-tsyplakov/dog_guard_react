import React from "react";
import ButtonProposition from "../../UI/Buttons/ButtonProposition";
import cl from "./OfferCard.module.css";

export default function OfferCard(props) {
  const list = props.properties.map((property) => (
    <li className={cl.offer__property} key={property}>
      {property}
    </li>
  ));

  return (
    <div className={cl.card__container}>
      <h2 className="offer__title">{props.title}</h2>
      <div className={cl.offer__properties}>
        <h3 className="offer__text">Включає:</h3>
        <ul>{list}</ul>
      </div>
      <div className={cl.offer__footer}>
        <p className="offer__title">1000 грн / місяць</p>
        <div className={cl.offer__button}>
          <ButtonProposition text={"Обрати"} />
        </div>
      </div>
    </div>
  );
}
