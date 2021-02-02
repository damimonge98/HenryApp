import React from 'react';
import { LayoutWrapper, Main } from './styles';
import Header from '../../components/Header';

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      <Main>
        {children}
      </Main>
    </LayoutWrapper>
  );
};

export default Layout;
