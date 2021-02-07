import React from 'react';
import { useSelector } from "react-redux";
import Layout from '../Layout';
import Loading from '../../components/Loading';
import Modules from '../Modulos/index';
import InitialHome from '../../components/Home/Home';
import LectureCard from '../../components/LectureCard';

const HomePage = () => {
  const { isAuth, loading } = useSelector(state => state.auth);


  if (loading) {
    return <Loading />;
  }

  return (
    <Layout>
      {
        isAuth ?
          <LectureCard lecture={{
            _id: "123S2XRT3",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            imagen: "https://waftengine.org/public/blog/1B5EE4D5D773F8A-RR.jpg",
            modulo: "",
            title: "React & Redux",
            video: []
          }} />
          // <Modules ></Modules>
          :
          <InitialHome />
      }
    </Layout>
  );
};

export default HomePage;
