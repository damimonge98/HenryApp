import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "../../configAxios";
import LectureCard from "../../components/LectureCard";
import { LecturePageWrapper, Grid } from "./styles";
import Layout from "../Layout";
import FilterBar from "../../components/FilterBar";
import Loading from '../../components/Loading';

const LecturesPage = (props) => {
  const { user, loading } = useSelector(state => state.auth);
  const [search, setSearch] = useState("");
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

  const filteredLectures = lectures
    .filter(l => {
      if (search.length > 0) {
        return l.title.toLowerCase().includes(search.toLowerCase())
          || l.description.toLowerCase().includes(search.toLowerCase()) ?
          true
          : false;
      };
      return true;
    });


  if (loading)
    return <Loading />;

  if (!user) {
    props.history.push("/login");
    return null;
  }

  if (user && user.companyName) {
    history.push('/empleos');
    return null;
  }

  return (
    <Layout>
      <FilterBar filters={[]} search={search} setSearch={setSearch} />
      <LecturePageWrapper>
        <Grid>
          {filteredLectures.map(l => (
            <LectureCard
              blocked={user.currentModule < module.order}
              key={l._id}
              lecture={l}
            />
          ))}
        </Grid>
      </LecturePageWrapper>
    </Layout>
  );
};
export default LecturesPage;
