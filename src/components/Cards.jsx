import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, cover, title }) => {
  return (
    <Link className="cards" to={`/Housing/${id}`}>
      <article>
        <img src={cover} alt={title} />
        <div className="card_content">
          <p className="subtitle">{title}</p>
        </div>
      </article>
    </Link>
  );
};

export default Card;
