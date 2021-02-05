import React from "react";
import { Link } from "react-router-dom";
import './styles.css';

const ModuleCard = ({ module, available }) => {
  let { title,
    description,
    lectures,
    _id } = module;

  return (
    <div>{
      available ?
        <Link to={`/modulo/${_id}`} >
          <div className="modCard">
            <div className="info">
              <div>
                <h3>{title}</h3>
              </div>
              <div>
                {Array.isArray(lectures)
                  ? <h5>Clases: {lectures.length}</h5>
                  : <h5>{lectures}</h5>}
              </div>
              <div>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </Link >
        :
        <div>
          <div className="modCard disabled">
            <div className="info textColor">
              <div>
                <h3>{title}</h3>
              </div>
              <div>
                {Array.isArray(lectures)
                  ? <h5>Clases: {lectures.length}</h5>
                  : <h5>{lectures}</h5>}
              </div>
              <div>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
    }</div>
  );
};

export default ModuleCard;
