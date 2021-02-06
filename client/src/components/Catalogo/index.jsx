import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// Components
import OfferCard from "../OfferCard/index";
import Layout from "../../containers/Layout";
import CrearEmpleo from "../CreateOffer/index";

// Styled Components
//import { CatalogueWrapper, EmpleosColumn } from './styles';
import "./styles.css";

const Catalogo = () => {
  const [empleos, setEmpleo] = useState([
    {
      _id: "",
      title: "",
      description: "",
      location: "",
      remote: "",
      tipo: "",
      end: "",
      linkedIn: "",
    },
  ]);

  useEffect(() => {
    getAllEmpleos();
  }, []);

  const getAllEmpleos = () => {
    axios.get("http://localhost:5000/empleos/").then((response) => {
      setEmpleo(response.data);
    });
    // setEmpleo([])
    // dispatch(getEmpleos());
  };

  const openEls = document.querySelectorAll("[data-open]");
  const isVisible = "is-visible";

  for (const el of openEls) {
    el.addEventListener("click", function () {
      const modalId = this.dataset.open;
      document.getElementById(modalId).classList.add(isVisible);
    });
  }

  const closeEls = document.querySelectorAll("[data-close]");

  for (const el of closeEls) {
    el.addEventListener("click", function () {
      this.parentElement.parentElement.parentElement.classList.remove(
        isVisible
      );
    });
  }

  document.addEventListener("click", (e) => {
    if (e.target == document.querySelector(".modal.is-visible")) {
      document.querySelector(".modal.is-visible").classList.remove(isVisible);
    }
  });

  document.addEventListener("keyup", (e) => {
    if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
      document.querySelector(".modal.is-visible").classList.remove(isVisible);
    }
  });

  return (
    <Layout>
      <div>
        <h3 className="offertitle">Bolsa de Trabajo</h3>
        <h5>
          ¿Eres empresa?{" "}
          <button type="button" class="btn" data-open="modal1">
            Publica tu oferta
          </button>
        </h5>
        {/* {-Modal crear oferta-} */}
        <div class="modal" id="modal1">
          <div class="modal-dialog">
            <header class="modal-header">
              Crear tu oferta de empleo
              <button class="close-modal" aria-label="close modal" data-close>
                ✕
              </button>
            </header>
            <section class="modal-content">
              <CrearEmpleo />
            </section>
          </div>
        </div>
        {/* {ciere de modal} */}
      </div>
      <div className="catalogueWrapper">
        <div className="empleosColumn">
          {empleos.map((empleo, index) => {
            return <OfferCard empleo={empleo} key={index} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Catalogo;
