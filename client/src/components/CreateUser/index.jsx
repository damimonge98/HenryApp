import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";



const CreateUser = () => {
  const [user, setUser] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    isSuperAdmin: false,
    role: "guest"
  });

  const [toggle, setToggle] = useState(false);

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = () => {
    const { email, firstName, lastName, password, role, isSuperAdmin } = user;
    axios.post("http://localhost:5000/users", { email, firstName, lastName, password, role, isSuperAdmin })
      .then();
  };

  const handleToggle = e => {
    if (e.target.checked) {
      setUser({
        ...user,
        isSuperAdmin: true
      });
      setToggle(true);
    } else {
      setUser({
        ...user,
        isSuperAdmin: false
      });
      setToggle(false);
    };
  };



  return (
    <div >
      <form onSubmit={handleSubmit} >
        <div>
          <label>Nombre</label>
          <div>
            <input
              onChange={(e) => { handleChange(e); }}
              name="firstName"
              value={user.firstName}
              type="text"
              required />
          </div>
        </div>
        <div>
          <label>Apellido</label>
          <div>
            <input
              onChange={(e) => { handleChange(e); }}
              name="lastName"
              type="text"
              required />
          </div>
        </div>
        <div>
          <label>Email</label>
          <div >
            <input
              onChange={(e) => { handleChange(e); }}
              name="email"
              value={user.email}
              type="text"
              required />
          </div>
        </div>
        <div>
          <label>Contraseña</label>
          <div>
            <input
              onChange={(e) => { handleChange(e); }}
              name="password"
              type="password"
              required />
          </div>
          <div >
            <label>SuperAdmin </label>
            <input
              type="checkbox"
              name="isSuperAdmin"
              onChange={(e) => {
                handleToggle(e);
              }} />
          </div>
          <div>
            <div>
              {toggle === false
                ?
                <div>
                  <label>Rol</label>
                  <div>
                    <input onChange={(e) => { handleChange(e); }} type="radio" name="role" value="guest" />
                    <label>Invitado</label>
                    <input onChange={(e) => { handleChange(e); }} type="radio" name="role" value="student" />
                    <label>Estudiante</label>
                    <input onChange={(e) => { handleChange(e); }} type="radio" name="role" value="instructor" />
                    <label>Instructor</label>
                  </div>
                </div>
                :
                <h4>El usuario se creará como SuperAdmin.</h4>
              }
            </div>
          </div>
          <div>
            <button type="submit">Crear Usuario</button>
          </div>
        </div>
      </form>
      <br />
      <Link to='/users'>
        <button type="button">
          <i className="fas fa-users" />Usuarios
        </button>
      </Link>
      <Link to='/'>
        <button type="button">
          <i className="fas fa-home" />Inicio
        </button>
      </Link>
    </div>
  );
};


export default CreateUser;
