import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const OfferCard = ({empleo}) => {
  //en teoria la tarjeta de empleo deberia tener primero logo y nombre de la empresa
  const { enterpriseName, logo, title, description, location, remote, tipo, end, linkedIn } = empleo;

  return (
    <div className="card">
      <div className="card__front">
        <div className="enterprise">
          <p>{enterpriseName}</p>
        </div>
        <div>
          <img src={logo} className="logo"/>
        </div>
        <div className="title">
          <p>{title}</p>
        </div>
        <div className="location">
          <p>{location}</p>
        </div>
        <div className="remote">
          <p>{remote===true?"Trabajo en remoto":"Presencial"}</p>
        </div>
        
      </div>

      <div className="card__back">
        <div className="description">
          <p>{description}</p>
        </div>
        <div className="tipo">
          <p>{tipo}</p>
        </div>
        <div className="end">
          <p>{end}</p>
          </div>
        <div className="linkedin">
          <a href={linkedIn} target="_blank">
            <button>Ver en LinkedIn</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
