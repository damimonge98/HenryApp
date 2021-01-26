import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UserList from "../src/components/UserList/index"
import CreateUser from "../src/components/CreateUser/index"



// Containers / Pages
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';
import RegisterPage from './containers/RegisterPage';
import Lectures from './containers/Lectures'

const routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* To do: Acá van las rutas del cliente.*/}
        <Route path='/' exact component={HomePage} />
        <Route path='/login' exact component={LoginPage} />
        <Route path='/register' exact component={RegisterPage} />
        <Route exact path='/users' component={UserList} />
        <Route exact path='/createUser' component={CreateUser} />
        <Route exact path='/lectures' component={Lectures} />
      </Switch>
    </BrowserRouter>
  );
};

export default routes;
