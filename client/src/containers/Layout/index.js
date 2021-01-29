import React from 'react';
import { LayoutWrapper } from './styles';
import Header from '../../components/Header';

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      {children}
    </LayoutWrapper>
  );
};

export default Layout;
