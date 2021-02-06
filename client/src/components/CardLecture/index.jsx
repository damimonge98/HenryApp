import React from "react";
import { Link } from "react-router-dom";
import { getModule } from "../../redux/actions/moduleActions";
import {useDispatch} from "react-redux";
import './estilos.css';

const CardLecture = ({ lecture }) => {
  const { _id,
    description,
    imagen,
    modulo,
    title,
    video, } = lecture;

  const dispatch = useDispatch()
  console.log(modulo)





  return (
    <Link to={`/lecture/${_id}/module/${modulo}`} >
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
