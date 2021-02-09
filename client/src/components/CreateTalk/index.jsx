import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { createTalk } from '../../redux/actions/talkActions';

const CreateTalk = () => {

  const [talk, setTalk] = useState({
    title: "",
    description: "",
    imagen: 'https://media-exp1.licdn.com/dms/image/C4E0BAQGy6GZmHb_SXA/company-logo_200_200/0/1603651276024?e=1619654400&v=beta&t=kRb_lMNqQF3oGVL9IrNYVxKdJf1qDW3FNTRdSeIu4zI',
    url: ""
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTalk(talk));
  };

  const handleChange = (e) => {
    setTalk({
      ...talk,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <div>
          <label>Título</label>
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
          <label>Imagen</label>
          <div>
            <input
              onChange={(e) => { handleChange(e); }}
              name="imagen"
              type="text"
              placeholder='Puede agregar una imagen' />
          </div>
        </div>
        <div>
          <label>URL</label>
          <div>
            <input
              onChange={(e) => { handleChange(e); }}
              name="url"
              type="text"
              required />
          </div>
        </div>
        <div>
          <div>
            <button type="submit">Crear HenryTalk</button>
          </div>
        </div>
      </form>
      <br />
      <Link to='/'>
        <button type="button"><i />Inicio</button>
      </Link>
      <Link to='/talklist'>
        <button type="button">
          <i />Lista de Talks</button>
      </Link>
    </div>
  );
};

export default CreateTalk;
