import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import axios from '../../configAxios';
import Modal from '../Modal'

const OfferCard = ({ empleo, admin, foo }) => {
  //en teoria la tarjeta de empleo deberia tener primero logo y nombre de la empresa
  const {
    enterpriseName,
    logo,
    title,
    description,
    location,
    remote,
    tipo,
    end,
    linkedIn,
  } = empleo;



  return (
    <div>

      <div className="cards">
      <div>{
              admin
                ? <button onClick={foo} className="close-btn">x</button>
                : null
            }</div>
        <div className="card__front">
          <div>
            <img src={logo} className="logo" />
          </div>
          <div className="divide" />
          <div className="title">
            <p>{title}</p>
          </div>
          <div className="enterprise">
            <p>{enterpriseName}</p>
          </div>
          <div className="divide" />
          <div className="location">
            <p>{location}</p>
          </div>
          <div className="tipo">
            <p>{tipo}</p>
          </div>

          <div className="remote">
            <p>{remote === true ? "Trabajo en remoto" : "Presencial"}</p>
          </div>
        </div>

        <div className="card__back">

          <div className="description">
            <br />
            <p>{description}</p>
          </div>
          <div className="divide" />
          <div className="end">
            <p>{end}</p>
          </div>
          <div className="divide" />

          <div className="linkedin">
            <a href={linkedIn} target="_blank">
              <button className="btn">Ver en LinkedIn</button>
            </a>

          </div>
        </div>
      </div>
      <div className="divide" />
    </div>
  );
};

export default OfferCard;
