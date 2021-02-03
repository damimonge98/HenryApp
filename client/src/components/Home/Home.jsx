import React from "react";
import HenryDev from "../../assets/images/HenryDev.png";
import WhyHenry from "../../assets/images/WhyHenry.png";
import Cost from "../../assets/images/Cost.png";
import Booms from "../Booms/Booms"
import "./styles.css";

const InitialHome = () => {
  return (


<div class="parent">
  <div class="div1"> 

           <Booms/>
        </div>
        

  <div class="div2">
        <img src={HenryDev} alt="devImg" />
     </div>

  <div class="div3">
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

    <div class="div4">
        <img src={Cost} alt="cost" /> 
    </div>

</div>
  
  );
};
export default InitialHome;
