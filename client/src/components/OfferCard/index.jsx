import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const OfferCard = (empleo) => {
  //en teoria la tarjeta de empleo deberia tener primero logo y nombre de la empresa
  const { title, description, location, remote, tipo, end, linkedIn } = empleo;

  return (
    <div className="card">
      <div className="card__front">
        <div>
          <h3>{title}</h3>
        </div>
        <div>
          <h6>{location}</h6>
        </div>
        <div>
          <p>{remote}</p>
        </div>
        
      </div>

      <div className="card__back">
        <div>
          <p>{description}</p>
        </div>
        <div>
          <p>{tipo}</p>
        </div>
        <div>
          <p>{end}</p>
          </div>
        <div>
          <a href={linkedIn} target="_blank">
            <button>Ver en LinkedIn</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
