import React, { useState } from "react";
import axios from "axios";

//-----falta el input de remote para cambiar su valor
//-----falta el input para subir logo de la empresa
//-----el input "end" deberia tener un selector dropdown para elegir si es front, back o fullstack


const CrearEmpleo = () => {
  const [empleo, setEmpleo] = useState({
    enterpriseName: "",
    title: "",
    description: "",
    location: "",
    tipo: "",
    end: "",
    remote: false,
    linkedIn: "",
  });


  function handleChange(e) {
    setEmpleo({
      ...empleo,
      [e.target.name]: e.target.value,
    });
  }
  const handleSubmit = () => {
    const {
      enterpriseName,
      logo,
      title,
      description,
      location,
      remote,
      tipo,
      end,
      linkedIn,
    } = empleo;
    axios
      .post("http://localhost:5000/empleos", {
        logo,
        enterpriseName,
        tipo,
        end,
        title,
        description,
        location,
        remote,
        linkedIn,
      })
      .then();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Titulo</label>
          <div>
            <input
              onChange={(e) => {
                handleChange(e);
              }}
              name="title"
              value={empleo.title}
              type="text"
              required
            />
          </div>
        </div>
        <div>
          <label>Descripcion</label>
          <div>
            <input
              onChange={(e) => {
                handleChange(e);
              }}
              name="description"
              value={empleo.description}
              type="text"
              required
            />
          </div>
        </div>
        <div>
          <label>Nombre de la Empresa</label>
          <div>
            <input
              onChange={(e) => {
                handleChange(e);
              }}
              name="enterpriseName"
              value={empleo.enterpriseName}
              type="text"
              required
            />
          </div>
        </div>
        <div>
          <label>Lugar de trabajo</label>
          <div>
            <input
              onChange={(e) => {
                handleChange(e);
              }}
              name="location"
              value={empleo.location}
              type="text"
              required
            />
          </div>          
        </div>
        <div>
          <label>Es remoto?</label>
          <div>
            <input
              onChange={(e) => {
                handleChange(e);
              }}
              name="remote"
              value={empleo.remote}
              type="text"
              required
            />
          </div>
        </div>
        <div>
          <label>Tipo de empleo</label>
          <div>
            <input
              onChange={(e) => {
                handleChange(e);
              }}
              name="tipo"
              value={empleo.tipo}
              type="text"
              required
            />
          </div>
        </div>
        <div>
          <label>Front, Back, Full?</label>
          <div>
            <input
              onChange={(e) => {
                handleChange(e);
              }}
              name="end"
              value={empleo.end}
              type="text"
              required
            />
          </div>
        </div>
        <div>
          <label>Enlace en LinkedIn</label>
          <div>
            <input
              onChange={(e) => {
                handleChange(e);
              }}
              name="linkedIn"
              value={empleo.linkedIn}
              type="text"
              required
            />
          </div>
        </div>
        <div>
          <button type="submit" onSubmit={handleSubmit} class="btn">Crear Empleo</button>
        </div>
      </form>
    </div>
  );
};

export default CrearEmpleo;
