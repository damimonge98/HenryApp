import React from "react";
import { url } from "react-router-dom";
import './estilos.css'

const CardTalk = ({ talk }) => {
    const { _id,
        description,
        imagen,
        orador,
        title,
        url, } = lecture;


    return (
        <url to={`/talk/${_id}`}>
            <div>
                <div>
                    <img src={imagen} alt="Henry app" />
                </div>
                <div>
                    <div>
                        <h3>{title}</h3>
                    </div>
                    <div>
                        {Array.isArray(url)
                            ? <h5>urls: {url.length}</h5>
                            : <h5>{url}</h5>}
                    </div>
                    <div>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </url>
    );
};

export default CardLecture