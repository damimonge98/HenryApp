import React from "react";
import { Link } from "react-router-dom";
import './estilos.css'

const CardVideo = ({ video }) => {
    const { title, profesor, img, duration, url } = video;

    return (
        <Link to={{ pathname: url }} target="_blank" >
            <div className="card">
                <div>
                    <div>
                        <h3>{title}</h3>
                    </div>
                    <div>
                        <h5>{profesor}</h5>
                    </div>
                    <div>
                        <img src={img}></img>
                    </div>
                    <div>
                        <p>{duration}</p>
                    </div>
                </div>
            </div>
        </Link>

    );
}

export default CardVideo;