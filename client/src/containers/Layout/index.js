import React from 'react';
import { useSelector } from "react-redux";
import { LayoutWrapper } from './styles';
import Header from '../../components/Header';
import Modules from '../Modulos/index';
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
           <InitialHome />


      } 
    </LayoutWrapper>
  );
};

export default Layout;
