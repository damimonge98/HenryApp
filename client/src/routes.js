import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* To do: Acá van las rutas del cliente.*/}
        {/* <Route path='/' component={HomePage} /> */}
        {/* <Route path='/user/profile' component={UserProfilePage} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default routes;
