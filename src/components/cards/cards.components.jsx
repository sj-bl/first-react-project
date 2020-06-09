import React from "react";
import "./card.css";

export const Card = (props) => (
  <div className="card">
    <img src={`${props.recipe.image_url}`} alt="user" className="img" />
    <h4>{props.recipe.title}</h4>
  </div>
);
