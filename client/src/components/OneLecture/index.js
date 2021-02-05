import React, { useEffect, useState } from "react";
import CardVideo from "../CardVideo/index";
import axios from "axios";
import "./index.css";
import { Link } from "react-router-dom";
import Readme from "../Readme/Readme";

const OneLecture = (props) => {

  const [allVideos, setAllVideos] = useState([{
    _id: "",
    img: "",
    lecture: "",
    profesor: "",
    title: "",
    url: ""
  }]);

  const [lecture, setLecture] = useState({
    title: "",
    desription: "",
    urlLecture: "",
    modulo: ""
  });

  useEffect(() => {
    getVideos();
    getOneLecture();
  }, []);

  const getVideos = () => {
    axios.get("http://localhost:5000/videos/", { params: { lectureid: props.match.params.lectureid } })
      .then(res => {
        setAllVideos(res.data);
      });
  };

  const getOneLecture = () => {
    axios.get(`http://localhost:5000/lectures/${props.match.params.lectureid}`).then(
      res => {
        setLecture(res.data);
      }
    );
  };

  return (
    <div>
      <h2>{lecture.title}</h2>
      <br />
      <h4>{lecture.description}</h4>
      <br />
      <Link to={{ pathname: lecture.urlLecture }} target="_blank">
        <h4><i className="fab fa-github"></i>{lecture.title}</h4>
      </Link>
      <br />
      <div className="videoCard-grid">
        {allVideos.map((video, index) => {
          return (
            <div key={index}>
              <CardVideo video={video} />
            </div>
          );
        })}
      </div>
      <Readme title = {lecture.title} url = {lecture.urlLecture}/>
    </div >
  );
};


export default OneLecture;
