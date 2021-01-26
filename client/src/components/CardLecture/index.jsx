import React from "react";
/* import { Link } from "react-router-dom"; */
import './estilos.css'

const CardLecture = ({ lecture }) => {
    const { title, imagen, description, video } = lecture;

    return (
        <div className="card">
            <div className="center">
                <img src={imagen} alt="Henry app" />
            </div>
            <div>
                <div>
                    <h3>{title}</h3>
                </div>
                <div>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default CardLecture