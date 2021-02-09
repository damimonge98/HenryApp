import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

// Components
import OfferCard from "../OfferCard/index";
import Layout from "../../containers/Layout";
import CrearEmpleo from "../CreateOffer/index";
import FilterBar from "../FilterBar/index";

// Styled Components
//import { CatalogueWrapper, EmpleosColumn } from './styles';
import "./styles.css";

const Catalogo = () => {
  const { user } = useSelector(state => state.auth);

  const [empleos, setEmpleo] = useState([
    {
      _id: "",
      logo: "",
      title: "",
      description: "",
      location: "",
      remote: "",
      tipo: "",
      end: "",
      linkedIn: "",
    },
  ]);
  const [filtered, setFiltered] = useState([]);


  useEffect(() => {
    getAllEmpleos();
  }, []);

  const getAllEmpleos = () => {
    axios.get("http://localhost:5000/empleos/").then((response) => {
      if (filtered) {
        setFiltered(response.data);
      }
      setEmpleo(response.data);
      console.log(user.isAdmin)
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
        <h5 className="h5">
          ¿Eres empresa?{" "}
          <button type="button" className="btn" data-open="modal1">
            Publica tu oferta
          </button>

        </h5>
        {/* {-Modal crear oferta-} */}
        <div className="modal" id="modal1">
          <div className="modal-dialog">
            <header className="modal-header">
              Crear tu oferta de empleo
              <button className="close-modal" aria-label="close modal" data-close>
                ✕
              </button>
            </header>
            <section className="modal-content">
              <CrearEmpleo />
            </section>
          </div>
        </div>
        {/* {ciere de modal} */}
      </div>
      <div className="catalogueWrapper">
        <div className="empleosColumn">
          {
            filtered.length ?
              filtered.map((empleo, index) => <OfferCard empleo={empleo} key={index} isAdmin={user.isSuperAdmin} id={empleo._id} />)
              :
              empleos.map((empleo, index) => {
                return <OfferCard empleo={empleo} key={index} isAdmin={user.isSuperAdmin} id={empleo._id} />;
              })}
        </div>
      </div>
    </Layout>
  );
};

export default Catalogo;
