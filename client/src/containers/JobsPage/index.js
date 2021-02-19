import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { Grid, JobsPageWrapper, H1, Button, Row } from './styles';
import Layout from '../Layout';
import JobCard from '../../components/JobCard';
import Loading from '../../components/Loading';
import axios from 'axios';
import CrearEmpleo from '../../components/CreateOffer';

const JobsPage = () => {
  const { user, loading } = useSelector(state => state.auth);
  const [jobs, setJobs] = useState([
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

  const getAllEmpleos = () => {
    axios.get("http://localhost:5000/empleos/").then((response) => {
      setJobs(response.data);
    });
  };

  useEffect(() => {
    getAllEmpleos();
  }, []);

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

  return (
    <Layout>
      <JobsPageWrapper>
        <H1>Bolsa de trabajo:</H1>
        {
          user && user.isSuperAdmin || user && user.role === 'company' ?
            <Row>
              <Button data-open="modal1">Publicar Trabajo</Button>
            </Row> : null
        }
        <Grid>
          {jobs.map(job => <JobCard job={job} />)}
        </Grid>
      </JobsPageWrapper>
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
    </Layout>
  );
};

export default JobsPage;
