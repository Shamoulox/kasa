import React from "react";
import { Link } from "react-router-dom";
import imgbanner from "../Assets/images/imgbanner.png";


function Card() {
  return (
    <Link className="cards"to="/Housing" >
      <article>
        <img src alt={imgbanner} />
        <div className="card_content">
          <p className="subtitle">Titre de la location</p>
        </div>
      </article>
    </Link>
  );
}

export default Card;
