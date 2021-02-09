import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import axios from "axios";
import Modal from '../Modal'

const OfferCard = ({ empleo, isAdmin, id }) => {
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

  const handleDelete = (id) => {
    if (confirm("Estás seguro de que quieres eliminar esta oferta de trabajo?")) {
      axios.delete(`http://localhost:5000/empleos/${id}`).then()
    }
  }

  return (
    <div>
      <div>{
        isAdmin ?
          <button onClick={() => handleDelete(id)}>X</button>

          : null
      }</div>
      <div className="cards">
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
