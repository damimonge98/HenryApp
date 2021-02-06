import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Containers / Pages
import CreateUser from "./components/CreateUser";
import OneLecture from "./components/OneLecture";
import HomePage from "./containers/HomePage";
import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";
import Lectures from "./containers/Lectures";
import GooglePage from "./containers/GooglePage";
import lectureList from "./containers/LectureList";
import ModuleList from "./containers/CRUDmodules";
import CreateTalk from "./components/CreateTalk";
import TalkList from "./components/TalkList";
import CardTalk from "./components/CardTalk";
import UserListPage from "./containers/UserListPage";
import Booms from "./components/Booms/Booms.jsx";
import Catalogo from "./components/Catalogo";
import Profile from "./components/Profile";

const routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* To do: Acá van las rutas del cliente.*/}
        <Route path="/" exact component={HomePage} />
        <Route path="/oauth/:token" exact component={GooglePage} />
        <Route path="/register" exact component={RegisterPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/users" component={UserListPage} />
        <Route exact path="/createUser" component={CreateUser} />
        <Route exact path="/lecture/:lectureid" component={OneLecture} />
        <Route exact path="/modulo/:moduloid" component={Lectures} />
        <Route exact path="/lecturesList" component={lectureList} />
        <Route exact path="/modules" component={ModuleList} />
        <Route exact path="/talk" component={CreateTalk} />
        <Route exact path="/talks" component={TalkList} />
        <Route exact path="/card-talk" component={CardTalk} />
        <Route exact path="/booms" component={Booms} />
        <Route exact path="/empleos" component={Catalogo} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
};

export default routes;
