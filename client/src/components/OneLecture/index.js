import React, { useEffect, useState } from "react";
import CardVideo from "../CardVideo/index";
import axios from "axios";
import "./index.css";
import { Link } from "react-router-dom";
import Readme from "../Readme/Readme";
import { getAllLectures } from "../../redux/actions/lecturesActions";
import {useSelector, useDispatch} from "react-redux";

const OneLecture = (props) => {
  const dispatch = useDispatch()
  const allLectures = useSelector (state => state.lectures.lectures)

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
    dispatch(getAllLectures())
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

  console.log("allVideos", allVideos)
  var urlVideo = allVideos[0].url
  urlVideo = urlVideo.replace("https://vimeo.com/", "")
  console.log(urlVideo)
  var urlVimeo = "https://player.vimeo.com/video/307791576?title=0&byline=0&portrait=0"
  urlVimeo = urlVimeo.replace("307791576", urlVideo)


  return (
    <div>      
      <Link to={{ pathname: lecture.urlLecture }} target="_blank">
        <h1 className = "h1"><i className="fab fa-github"></i>{lecture.title}</h1>
      </Link>
      <br />

      <div className = "menuDiv">
      {allLectures.length === 0 ? null :
      allLectures.map(el => <button>{el.title}</button>)}
     </div>

      <button onClick = {()=> {window.history.back()}}className = "h1"> Volver </button>
      <br/>
      <div>
        

      </div>
      
      {/* <div className="videoCard-grid">
        {allVideos.map((video, index) => {
          return (
            <div key={index}>
              <CardVideo video={video} />
            </div>
          );
        })}
      </div>*/}

      <div className = "video" >
        <iframe src= "https://player.vimeo.com/video/426051769" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
      </div>
      <Readme title = {lecture.title} url = {lecture.urlLecture}/>
    </div >
  );
};


export default OneLecture;
