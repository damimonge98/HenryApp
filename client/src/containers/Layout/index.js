import React from 'react';
import { LayoutWrapper } from './styles';
import Header from '../../components/Header';
import Modules from '../Modulos/index'

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      {children}
      <Modules ></Modules>
    </LayoutWrapper>
  );
};

export default Layout;
