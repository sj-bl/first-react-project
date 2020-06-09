import React from "react";
import "./card-list.style.css";
import { Card } from "../cards/cards.components";

export const CardList = (prop) => {
  return (
    <div className="cardList">
      {prop.recipes.map((recipe, id) => (
        <Card key={id} recipe={recipe}></Card>
      ))}
    </div>
  );
};
