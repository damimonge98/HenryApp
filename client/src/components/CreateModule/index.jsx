import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from '../../configAxios';

const CreateModule = () => {
  const [module, setModule] = useState({
    title: "",
    lectures: [],
    description: "",
  });

  function handleChange(e) {
    setModule({
      ...module,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = () => {
    const { title, description } = module;
    axios.post("/modules", { title, description })
      .then(console.log(res));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <div>
          <label>Nombre</label>
          <div>
            <input
              onChange={(e) => { handleChange(e); }}
              name="title"
              type="text"
              required />
          </div>
        </div>
        <div>
          <label>Descripción</label>
          <div>
            <textarea
              onChange={(e) => { handleChange(e); }}
              name="description"
              type="text"
              required />
          </div>
        </div>
        <div>
          <div>
            <button type="submit">Crear módulo</button>
          </div>
        </div>
      </form>
   {/*    <br />
      <Link to='/'>
        <button type="button">
          <i className="fas fa-home" />Inicio
        </button>
      </Link>
      <Link to='/lectures'>
        <button type="button">
          <i className="fas fa-list" />Clases
        </button>
      </Link> */}
    </div >
  );
};

export default CreateModule;
