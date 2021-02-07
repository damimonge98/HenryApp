import React, { useEffect, useState } from "react";
import axios from "axios";
import LectureCard from "../../components/LectureCard";
import { LecturePageWrapper, Grid } from "./styles";
import Layout from "../Layout";
import FilterBar from "../../components/FilterBar";

const LecturesPage = (props) => {
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
    console.log(props);
    axios.get(`http://localhost:5000/modules/${props.match.params.moduloid}`)
      .then(res => {
        setModule(res.data);
      });
  };

  const getOneModule = () => {
    axios.get(`http://localhost:5000/lectures/?moduleid=${props.match.params.moduloid}`).then(
      res => {
        console.log(res);
        setLectures(res.data);
      });
  };

  return (
    <Layout>
      <FilterBar filters={[]} />
      <LecturePageWrapper>
        <Grid>
          {lectures.map(l => <LectureCard key={l._id} lecture={l} />)}
        </Grid>
      </LecturePageWrapper>
    </Layout>
  );
};
export default LecturesPage;
