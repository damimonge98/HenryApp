import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { createTalk } from '../../redux/actions/talkActions';

const CreateTalk = () => {

  const { talks } = useSelector(state => state);
  const dispatch = useDispatch();

  const handleSubmit = async (data) => {
    data.preventDefault();
    console.log('DATA', data);
    dispatch(createTalk(data));
  };

  // const onSubmit = (data) => {
  //   dispatch(createTalk(data));
  // };

  const [talk, setTalk] = useState({
    title: "",
    description: "",
    imagen: 'https://media-exp1.licdn.com/dms/image/C4E0BAQGy6GZmHb_SXA/company-logo_200_200/0/1603651276024?e=1619654400&v=beta&t=kRb_lMNqQF3oGVL9IrNYVxKdJf1qDW3FNTRdSeIu4zI',
    url: ""
  });

  function onChange(data) {
    setTalk({
      ...talk,
      [data.target.name]: data.target.value
    });
  }

  // const handleSubmit = async (e) => {
  //   try {
  //     e.preventDefault();
  //     const { title, imagen, description, url } = talk;
  //     await axios.post('http://localhost:5000/talk', { title, description, imagen, url });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <div>
          <label>Titulo</label>
          <div>
            <input
              onChange={(data) => { onChange(data); }}
              name="title"
              type="text"
              required />
          </div>
        </div>
        <div>
          <label>Descripción</label>
          <div>
            <textarea
              onChange={(data) => { onChange(data); }}
              name="description"
              type="text"
              required />
          </div>
        </div>
        <div>
          <label>Imagen</label>
          <div>
            <input
              onChange={(data) => { onChange(data); }}
              name="imagen"
              type="text"
              placeholder='Puede agregar una imagen' />
          </div>
        </div>
        <div>
          <label>URL</label>
          <div>
            <input
              onChange={(data) => { onChange(data); }}
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
      <Link to='/henrytalks'>
        <button type="button">
          <i />Lista de Talks</button>
      </Link>
    </div>
  );
};

export default CreateTalk;
