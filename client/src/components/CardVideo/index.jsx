import React from "react";
import { Link } from "react-router-dom";
import './estilos.css';

const CardVideo = ({ video }) => {
  const {
    _id,
    img,
    lecture,
    profesor,
    title,
    url } = video;

  return (
    <Link to={{ pathname: url }} target="_blank" >
      <div className="card">
        <div>
          <div>
            <img src={img}></img>
          </div>
          <div>
            <h3>{title}</h3>
          </div>
          <div>
            <h5>{profesor}</h5>
          </div>
        </div>
      </div>
    </Link>

  );
};

export default CardVideo;
