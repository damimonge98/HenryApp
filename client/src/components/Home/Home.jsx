import React from "react";
import HenryDev from "../../assets/images/HenryDev.png";
import Cost from "../../assets/images/Cost.png";
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
        <h1>Invertimos en tu educación</h1>
        <p className="parrafo">
          Conviértete en un desarrollador de software en 4 meses a remoto. Y lo
          mejor, sólo nos pagas cuando consigues un trabajo.
        </p>
        <button className="btnhome">Empeza tu carrera</button>
      </div>
      <div className="div3">
        <h1>Hire Henrys</h1>
        <p className="parrafo">
          Si tienes una empresa y buscas sumar programadores a tu equipo,
          ofrecemos un espacio donde puedes publicar tus ofertas y recibir
          postulaciones de nuestros graduados.
        </p>
        <button className="btnhome">Publica tus ofertas</button>
      </div>
      </div>
    </div>
  );
};
export default InitialHome;
