import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";



const CreateUser = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    isSuperAdmin: false,
    role: "guest",
    avatar: ""
  });


  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = () => {
    const { email, firstName, lastName, password, role } = user;
    console.log("entra");
    axios.post("http://localhost:5000/users", { email, firstName, lastName, password, role })
      .then(res => {
        console.log(res, "Entra");
      });
  };


  return (
    <div >
      <form onSubmit={handleSubmit} >
        <div >
          <label >
            Nombre
                    </label>
          <div >
            <input
              onChange={(e) => { handleChange(e); }}
              name="firstName"
              value={user.firstName}
              type="text"
              required
            />
          </div>
        </div>
        <div >
          <label >
            Apellido
                    </label>
          <div >
            <input
              onChange={(e) => { handleChange(e); }}
              name="lastName"
              type="text"
              required
            />
          </div>
        </div>
        <div >
          <label >
            E-mail
                    </label>
          <div >
            <input
              onChange={(e) => { handleChange(e); }}
              name="email"
              value={user.email}
              type="text"
              required
            />
          </div>
        </div>
        <div >
          <label>Password</label>
          <div>
            <input
              onChange={(e) => { handleChange(e); }}
              name="password"
              type="password"
              required
            />
          </div>
          {/*      <div >
                        <label>SuperAdmin</label>
                        <div>
                            <input
                                onChange={(e) => { handleChange(e); }}
                                name="isSuperAdmin"
                                type={Boolean}
                                required
                            />
                        </div>
                    </div> */}
          <div >
            <label>
              Rol
                        </label>
            <div>
              <input onChange={(e) => { handleChange(e); }} type="radio" name="role" value="guest" />
              <label >Visitante</label>
              <input onChange={(e) => { handleChange(e); }} type="radio" name="role" value="student" />
              <label >Estudiante</label>
              <input onChange={(e) => { handleChange(e); }} type="radio" name="role" value="instructor" />
              <label >Instructor</label>
            </div>
          </div>
          {/* <div >
                        <label>Avatar</label>
                        <div>
                            <input
                                onChange={(e) => { handleChange(e); }}
                                name="avatar"
                                type="image"
                            />
                        </div>
                    </div> */}
          <div>
            <button type="submit">
              Create user
                        </button>
          </div>
        </div>
      </form><br />
      <Link to='/users'>
        <button type="button">
          <i class="fas fa-users" />
                  Lista de usuarios
              </button>
      </Link>
    </div>
  );
};


export default CreateUser;