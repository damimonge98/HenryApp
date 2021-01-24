import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CrudInstructor from "./components/CRUDinstructor";

const routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* To do: Acá van las rutas del cliente.*/}
        <Route path='/instructor' component={CrudInstructor} />
      </Switch>
    </BrowserRouter>
  );
};

export default routes;
