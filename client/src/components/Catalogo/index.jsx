import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from '../../configAxios';
import { useSelector, useDispatch } from "react-redux";

// Components
import OfferCard from "../OfferCard/index";
import Layout from "../../containers/Layout";
import CrearEmpleo from "../CreateOffer/index";

// Styled Components
//import { CatalogueWrapper, EmpleosColumn } from './styles';
import "./styles.css";
import Loading from '../Loading';
import JobCard from "../JobCard";

const Catalogo = () => {
  const { user, loading } = useSelector(state => state.auth);
  const [eliminar, setEliminar] = useState(false);
  const history = useHistory();

  const [empleos, setEmpleo] = useState([
    {
      _id: "",
      logo: "",
      title: "",
      description: "",
      location: "",
      remote: false,
      tipo: "part-time",
      end: "frontend",
      linkedIn: ""
    },
  ]);

  const getAllEmpleos = () => {
    axios.get("http://localhost:5000/empleos/").then((response) => {
      setEmpleo(response.data);
    });
  };

  useEffect(() => {
    getAllEmpleos();
    setEliminar(false);
  }, [eliminar]);

  if (loading)
    return <Loading />;

  if (user.role !== 'company' && user.currentModule <= 4) {
    history.push("/login");
    return null;
  }

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

  const handleDelete = (id) => {
    if (confirm("Estás seguro de que quieres eliminar esta oferta de trabajo?")) {
      axios.delete(`http://localhost:5000/empleos/${id}`).then();
      setEliminar(true);
    }
  };



  return (
    <Layout>
      <div>
        <h3 className="offertitle">Bolsa de Trabajo</h3>
        <div>{
          user && user.isSuperAdmin || user && user.role === 'company' ?
            <h5 className="h5">
              <button type="button" className="btn" data-open="modal1">
                Publica tu oferta
          </button>
            </h5>
            : null
        }</div>
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
            empleos.map((empleo, index) => {
              return <OfferCard empleo={empleo} key={index} admin={user && user.isSuperAdmin} foo={() => handleDelete(empleo._id)} />;
            }).reverse()}
        </div>
      </div>
      <JobCard job={empleos[0]} />
    </Layout>
  );
};

export default Catalogo;
