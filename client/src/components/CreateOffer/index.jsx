import React, { useState } from "react";
import axios from "axios";

const CrearEmpleo = () => {
  const [empleo, setEmpleo] = useState({
    // enterprise: {},
    title: "",
    description: "",
    location: "",
    remote: false,
    linkedIn: "",
  });

  //const [toggle, setToggle] = useState(false);

  function handleChange(e) {
    setEmpleo({
      ...empleo,
      [e.target.name]: e.target.value,
    });
  }
  const handleSubmit = () => {
    const { title, description, location, remote, linkedIn } = empleo;
    axios
      .post("http://localhost:5000/empleos", {
        title,
        description,
        location,
        remote,
        linkedIn,
      })
      .then();
  };
  // const handleToggle = (e) => {
  //   if (e.target.checked) {
  //     setEmpleo({
  //       ...empleo,
  //       remote: true,
  //     });
  //     setToggle(true);
  //   } else {
  //     setEmpleo({
  //       ...empleo,
  //       remote: false,
  //     });
  //     setToggle(false);
  //   }
  // };

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
          <button type="submit">Crear Empleo</button>
        </div>
      </form>
    </div>
  );
};

export default CrearEmpleo;
