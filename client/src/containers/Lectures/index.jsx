import React, { useEffect, useState } from "react";
import axios from "../../configAxios";
import './estilos.css';
import LectureCard from "../../components/LectureCard";
import Header from "../../components/Header/index";


const Lectures = (props) => {
  const [lectures, setLectures] = useState([{
    _id: "",
    description: "",
    imagen: "",
    modulo: "",
    title: "",
    video: []
  }]);

  const [module, setModule] = useState([{
    _id: "",
    description: "",
    lectures: [],
    order: "",
    title: "",
  }]);

  useEffect(() => {
    getLectures();
    getOneModule();
  }, []);

  const getLectures = () => {
    axios.get(`http://localhost:5000/modules/${props.match.params.moduloid}`)
      .then(res => {
        setModule(res.data);
      });
  };

  const getOneModule = () => {
    axios.get(`http://localhost:5000/lectures/?moduleid=${props.match.params.moduloid}`).then(
      res => {
        setLectures(res.data);
      });
  };

  return (
    <div>
      <Header />
      <h2>{module.title}</h2>
      <br />
      <div className="lecture-grid">
        {lectures.map((lecture, index) => {
          return (
            <div key={index}>
              <LectureCard lecture={lecture} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Lectures;
