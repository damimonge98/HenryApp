import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const OfferCard = ({ empleo }) => {
  //en teoria la tarjeta de empleo deberia tener primero logo y nombre de la empresa
  const { title, description, location, remote, linkedIn } = empleo;

  return (
    <div className="card">
      <div>
        <h3>{title}</h3>
      </div>
      <div>
        <h6>{location}</h6>
      </div>
      <div>
        <p>{remote}</p>
      </div>
      <div>
        <p>{description}</p>
      </div>
      <div>
        <a href={linkedIn} target="_blank"><button>Ver en LinkedIn</button></a>
      </div>
    </div>
  );
};

export default OfferCard;
