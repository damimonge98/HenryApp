import React from 'react';
import { useSelector } from "react-redux";
import { LayoutWrapper, Main } from './styles';
import Header from '../../components/Header';
import Modules from '../Modulos/index';
import InitialHome from '../../components/Home/Home';

const Layout = ({ children }) => {

  return (
    <LayoutWrapper>
      <Header />
      <Main>
        {children}
      </Main>
    </LayoutWrapper >
  );
};

export default Layout;
