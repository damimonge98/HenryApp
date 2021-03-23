import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import CardTalk from '../CardTalk';
import axios from '../../configAxios';

const TalkList = () => {
  const [allTalks, setAllTalks] = useState([{
    title: "",
    description: "",
    imagen: 'https://media-exp1.licdn.com/dms/image/C4E0BAQGy6GZmHb_SXA/company-logo_200_200/0/1603651276024?e=1619654400&v=beta&t=kRb_lMNqQF3oGVL9IrNYVxKdJf1qDW3FNTRdSeIu4zI',
    url: ""
  }]);



  const getTalks = () => {
    axios.get("/talk")
      .then(res => {
        setAllTalks(res.data);
      });
  };

  useEffect(() => {
    getTalks();
  }, []);


  const [modalState, setModalState] = useState(false);
  const dispatch = useDispatch();

  return (
    <div>


      <Link to='/createTalk'>
        <button type="button"><i className="fas fa-plus-circle me-2" />Crear talk</button>
      </Link>
      <Link to='/'>
        <button type="button"><i className="fas fa-home" />Inicio</button>
      </Link>
      <br />

      <h2><i className="fas fa-users" />Henry Talks</h2>
      <table >
        <thead >
          <tr >
            <th scope="col">Nombre </th>
            <th scope="col">Descripción </th>
            <th scope="col">Link </th>
          </tr>
        </thead>
      </table>
      {allTalks.map((e, i) => {
        return (
          <div key={(i)}>
            <CardTalk talk={e} />
          </div>
        );
      })}
    </div>
  );
};

export default TalkList;
