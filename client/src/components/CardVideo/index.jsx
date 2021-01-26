import React from "react";

const CardVideo = ({ video }) => {
    const { title, profesor, img, duration } = video;


    return (
        <div>
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
    );
}

export default CardVideo;