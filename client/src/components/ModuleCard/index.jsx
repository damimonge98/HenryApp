import React from "react";
import { Link } from "react-router-dom";
import './styles.css';

const ModuleCard = ({ module }) => {
    let { title,
        description,
        lectures,
        _id } = module;

    return (
        <Link to={`/${_id}`}>
            <div className="modCard">
                <div className="info">
                    <div>
                        <h3>{title}</h3>
                    </div>
                    <div>
                        {Array.isArray(lectures)
                            ? <h5>Lectures: {lectures.length}</h5>
                            : <h5>{lectures}</h5>}
                    </div>
                    <div>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ModuleCard;




