import React from "react";
import { Link } from "react-router-dom";
import './estilos.css'

const CardLecture = ({ lecture }) => {
    let { title, description, video, modulo, imagen } = lecture;

    return (
        <Link to={`/${title}`}>
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
                            ? <h5>videos: {video.length}</h5>
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

export default CardLecture