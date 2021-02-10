import React from "react";
import {Link} from "react-router-dom";
import Layout from "../../containers/Layout";
import './styles.css'

export default function About() {
  return (
    <Layout>
      <div className="henry">
        <div className="nosotros">
          <div className="divisor1"/>
        <h1 className="title1">Sobre HENRY</h1>
          <div className="divisor1"/>
        <p>
            Henry es un startup que nació para dar oportunidades a personas con
            determinación, disciplina y ambición de tener éxito en el mundo de
            la tecnología. Brinda acceso a la educación en carreras
            tecnológicas a través de un modelo innovador de financiamiento.
            Invierte en el talento digital del futuro. En Henry, se sostiene que
            la educación es el dinero mejor invertido. Por eso, trabajan todos
            los días para poder invertir en potencial humano, independientemente
            de sus circunstancias. #SoyHenry
          </p>
        </div>
        <div className="divisor1"/>
        <div className="redes">
          <h2 className="title2">¡Seguilos en sus redes!</h2>


          <a href="https://twitter.com/soyhenry_ok" target="_blank">
          <i class="fab fa-twitter"/>
          </a>
          <a href="https://www.instagram.com/soyhenry_ok/" target="_blank">
          <i class="fab fa-instagram"/>
          </a>
          <a
            href="https://www.linkedin.com/school/soyhenry/about/"
            target="_blank"
          >
            <i class="fab fa-linkedin-in"/>
          </a>
          <a
            href="https://www.facebook.com/HENRY-108437840594440"
            target="_blank"
          >
            <i class="fab fa-facebook"/>
          </a>

          <h6>Contacto: contacto@soyhenry.com</h6>

        </div>
      </div>
      <div className="divisor1"/>
      <div className="pagina">
        <p>
          Esta página es un proyecto creado por estudiantes de HENRY del cohorte
          07 (Febrero 2021) como parte de un trabajo práctico desarrollado para
          el Bootcamp. No es un sitio web real, funcional ni oficial. Todos sus
          componentes fueron creados y/o seleccionados con fines demostrativos.
        </p>
        <div className="divisor1"/>
        <h3 className="title3">Conoce a sus desarrolladores <Link to="/thispage"> aquí </Link></h3>
      </div>

    </Layout>
  );
}