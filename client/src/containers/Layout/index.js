import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { LayoutWrapper } from './styles';
import Header from '../../components/Header';
import Modules from '../Modulos/index'

const Layout = ({ children }) => {
  const { isAuth } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  return (
    <LayoutWrapper>
      <Header />
      {children}
      {
        isAuth ?
          <Modules ></Modules>
          : console.log('')
      }
    </LayoutWrapper>
  );
};

export default Layout;
