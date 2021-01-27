import React, { useEffect, useState } from "react";
import axios from "axios";
import CardLecture from "../../components/CardLecture/index";
import './estilos.css'

const Lectures = () => {
    const [lectures, setLectures] = useState([]);

    useEffect(() => {
        getLectures()
    }, []);

    const getLectures = () => {
        axios.get("http://localhost:5000/lectures")
            .then((lecture) => {
                setLectures(lecture.data)
            });
    };
    return (
        <div>
            <h2>Nombre del modulo</h2>
            <br />
            <div className="lecture-grid">
                {lectures.map((lecture, index) => {
                    return (
                        <div key={index}>
                            <CardLecture lecture={lecture} />
                        </div>
                    );
                })}
            </div>
        </div>
    )
};
export default Lectures;
