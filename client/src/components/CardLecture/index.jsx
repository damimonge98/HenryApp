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
      <div className="card">
        <div className="center">
        <Link to={`/lecture/${_id}/module/${modulo}`} >
        <img src={imagen} alt="Henry app" />
            </Link>
          
        </div>
        <div>
          <div>
          <Link to={`/lecture/${_id}/module/${modulo}`} >
            <h3>{title}</h3>
            </Link>
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
    
  );
};

export default CardLecture;
