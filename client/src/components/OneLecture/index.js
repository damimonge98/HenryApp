import React, { useEffect, useState } from "react";
import CardVideo from "../CardVideo/index";
import axios from "axios";
import "./index.css";

const OneLecture = () => {

    const [allVideos, setAllVideos] = useState([{
        _id: "",
        img: "",
        lecture: "",
        profesor: "",
        title: "",
        url: ""
    }]);

    useEffect(() => {
        getVideos()
    }, []);

    const getVideos = () => {
        axios.get("http://localhost:5000/videos/")
            .then(res => {
                console.log(res.data)
                setAllVideos(res.data)
                console.log(allVideos)

            });
    };

    return (
        <div>
            <h3>Hola</h3>
            <div className="videoCard-grid">
                {allVideos.map((video, index) => {
                    return (
                        <div key={index}>
                            <CardVideo video={video} />
                        </div>
                    );
                })}
            </div>
        </div>
    )
}


export default OneLecture;