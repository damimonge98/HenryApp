import React, { useEffect, useState } from "react";
import axios from "axios";
import CardLecture from '../../components/CardLecture/index'
import './estilos.css'

const Lectures = (props) => {
    const [lectures, setLectures] = useState([{
        _id: "",
        description: "",
        imagen: "",
        modulo: "",
        title: "",
        video: []
    }]);


    useEffect(() => {
        getLectures()
    }, []);

    const getLectures = () => {
        axios.get(`http://localhost:5000/lectures/?moduleid=${props.match.params.moduloid}`)
            .then(res => {
                setLectures(res.data)
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
