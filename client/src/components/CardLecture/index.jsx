import React from "react";
import { Link } from "react-router-dom";
import './estilos.css';

const CardLecture = ({ lecture }) => {
  const { _id,
    description,
    imagen,
    modulo,
    title,
    video, } = lecture;


  return (
    <Link to={`/lecture/${_id}`}>
      <div className="card">
        <div className="center">
          <img src={imagen} alt="Henry app" />
        </div>
        <div>
          <div>
            <h3>{title}</h3>
          </div>
          <div>
            {Array.isArray(video)
              ? <h5>Videos: {video.length}</h5>
              : <h5>{video}</h5>}
          </div>
          <div>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardLecture;
