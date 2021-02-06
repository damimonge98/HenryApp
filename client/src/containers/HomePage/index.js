import React from 'react';
import { useSelector } from "react-redux";
import Layout from '../Layout';
import Loading from '../../components/Loading';
import Modules from '../Modulos/index';
import InitialHome from '../../components/Home/Home';

const HomePage = () => {
  const { isAuth, loading } = useSelector(state => state.auth);


  if (loading) {
    return <Loading />;
  }

  return (
    <Layout>
      {
        isAuth ?
          <Modules ></Modules>
          :
          <InitialHome />
      }
    </Layout>
  );
};

export default HomePage;
