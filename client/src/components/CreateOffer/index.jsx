import React, { useState } from "react";
import axios from '../../configAxios';
import firebase from 'firebase';
import { useSelector } from "react-redux";


const CrearEmpleo = () => {
  const usuario = useSelector(state => state.auth.user);

  const [empleo, setEmpleo] = useState({
    _id: "",
    logo: "",
    title: "",
    description: "",
    location: "",
    remote: false,
    tipo: "part-time",
    end: "frontend",
    linkedIn: ""
  });
  const [uploadValue, setUploadValue] = useState(0);


  function handleChange(e) {
    setEmpleo({
      ...empleo,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (id) => {  //Este ID corresponde al usuario logeado rol empresa.
    const { enterpriseName, logo, title, description, location, remote, tipo, end, linkedIn } = empleo;
    axios
      .post(`/empleos/${id}`, { logo, enterpriseName, tipo, end, title, description, location, remote, linkedIn })
      .then();
  };

  function handleUpload(e) {
    const file = e.target.files[0];
    const storageRef = firebase.storage().ref(`/fotos/${file.name}`);
    const task = storageRef.put(file);

    task.on('state_changed', snapshot => {
      let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setUploadValue(percentage);
    }, err => { console.log(err); }, async () => {
      const urlLogo = await storageRef.getDownloadURL();
      setEmpleo({ ...empleo, logo: urlLogo });
    });
  }


  return (
    <div>
      <form onSubmit={() => handleSubmit(usuario._id)}>

        <div>
          <label>Título</label>
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
          <label>Descripción</label>
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
          <label>Nombre de la empresa</label>
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
            <select
              value={empleo.remote}
              onChange={(e) => {
                handleChange(e);
              }}
              name="remote"
            >
              <option value={false}>No</option>
              <option value={true}>Sí</option>
            </select>
          </div>
        </div>
        <div>
          <label>Tipo de empleo</label>
          <div>
            <select
              value={empleo.tipo}
              onChange={(e) => {
                handleChange(e);
              }}
              name="tipo"
              required
            >
              <option value="part-time">Part-Time</option>
              <option value="full-time">Full-Time</option>
              <option value="pasantia">Pasantía</option>
              <option value="eventual">Eventual</option>
            </select>
          </div>
        </div>
        <div>
          <label>Front / Back / Full-Stack</label>
          <div>
            <select
              value={empleo.end}
              onChange={(e) => {
                handleChange(e);
              }}
              name="end"
              required
            >
              <option value="frontend">Front-End</option>
              <option value="backend">Back-End</option>
              <option value="fullstack">Full-Stack</option>
            </select>

          </div>
        </div>
        <div>
          <label>Enlace de LinkedIn</label>
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
        </div><br />
        <div>Logo de la empresa
          <br />
          <progress value={uploadValue} max='100' ></progress>
          <input onChange={(e) => { handleUpload(e); }} name="img"
            type="file"
            required
          />
        </div>
        <br />
        <div>
          <button type="submit" className="btn">
            Crear Empleo
          </button>
        </div>
      </form>
    </div>
  );
};

export default CrearEmpleo;
