import React from 'react';
import { useSelector } from "react-redux";
import Layout from '../Layout';
import Modules from '../Modulos/index';
import InitialHome from '../../components/Home/Home';

const HomePage = () => {
  const { isAuth } = useSelector(state => state.auth);

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
