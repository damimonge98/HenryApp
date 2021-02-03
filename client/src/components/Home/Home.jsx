import React from "react";
import HenryDev from "../../assets/images/HenryDev.png";
import WhyHenry from "../../assets/images/WhyHenry.png";
import Cost from "../../assets/images/Cost.png";
import "./styles.css";

const InitialHome = () => {
  return (
    <div>
      <div className="dev">
      <div className="texto">
        <div className="invertimos">
          <p>
            <h1 class="title1">Invertimos en tu educación</h1>
            <h2 class="title2">Comienza a estudiar programación</h2>
            <h4 class="intro">
              Conviértete en un desarrollador de software en 4 meses a remoto. Y
              lo mejor, sólo nos pagas cuando consigues un trabajo.
            </h4>
          </p>
        </div>
        <div className="aplica" role="button">
        <p className="aplicabtn">Aplica</p>
        </div>
        </div>
        <div className="devImg">
        <img src={HenryDev} alt="devImg" />
        </div>
      </div>
      <div className="why">
        <div className="reasons">
          <h1> ¿Por qué Henry?</h1>
          <br/>
          <h2>100% online</h2>
          <br/>
          <p>
            Toda la carrera es a remoto pero las clases son en VIVO. Solo
            necesitas una computadora y un buen acceso a internet.
          </p>
          <br/>
          <h2>Soporte 1:1</h2>
          <br/>
          <p>
            Contamos con una red de instructores, PM’s y coaches que van a estar
            a tu disposición cuando tengas dificultades ayudándote a acelerar tu
            carrera.
          </p>
          <br/>
          <h2>Currícula</h2>
          
          <br/><p>
            Con +700 horas de programación basado en prácticas y proyectos
            reales, aprenderás las habilidades más demandadas del mercado
            laboral.
          </p><br/>
          <h2>Comunidad</h2>
          <br/><p>
            Unirte a Henry significa crear conexiones para toda la vida, hacer
            nuevos amigos y aprovechar oportunidades globales y diversas.
          </p>
        </div>
        <img src={WhyHenry} alt="why" />
      </div>
      <div className="cost">
        <img src={Cost} alt="cost" />
      </div>
    </div>
  );
};
export default InitialHome;
