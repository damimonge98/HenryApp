import React from 'react';
import { useSelector } from "react-redux";
import { LayoutWrapper } from './styles';
import Header from '../../components/Header';
import Modules from '../Modulos/index';
import Booms from "../../components/Booms/Booms";
import InitialHome from '../../components/Home/Home';

const Layout = ({ children }) => {
  const { isAuth } = useSelector(state => state.auth);  

  return (
    <LayoutWrapper>
      <Header />
      {children}
      {
        isAuth ?
          <Modules ></Modules>
          : 
          <Fragment>
           <InitialHome />
          </Fragment>

      } 
    </LayoutWrapper>
  );
};

export default Layout;
