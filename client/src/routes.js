import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UserList from "../src/components/UserList/index"
import CreateUser from "../src/components/CreateUser/index"



const routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* To do: Acá van las rutas del cliente.*/}
        <Route exact path='/users' component={UserList} />
        <Route exact path='/createUser' component={CreateUser} />
      </Switch>
    </BrowserRouter>
  );
};

export default routes;
