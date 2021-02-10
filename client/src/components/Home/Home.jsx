import React from "react";
import {Link} from "react-router-dom";
import Booms from "../Booms/Booms";
import "./styles.css";

const InitialHome = () => {
  return (
    <div className="parent">
      <div className="div1">
        <Booms />
      </div>
      <div className="container">
        <div className="div2">
          <h1>Recursos para los alumnos</h1>
          <p className="parrafo">
            Tendrás acceso a todo tu material de estudio según el módulo en el
            que estás cursando, clases grabadas de diferentes instructores y tu
            estado de cuenta, y cuando termines el Módulo 4 ¡Podrás acceder a
            nuestra bolsa de empleos!
          </p>
          <Link to="/login">
          <button className="btnhome">Accedé</button>
          </Link>
        </div>
        <div className="div3">
          <h1>Hire Henrys</h1>
          <p className="parrafo">
            Si tienes una empresa y buscas sumar programadores a tu equipo,
            ofrecemos un espacio donde puedes publicar tus ofertas y recibir
            postulaciones de nuestros graduados.
          </p>
          <Link to="/login">
          <button className="btnhome">Publica tus ofertas</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default InitialHome;
