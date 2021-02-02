import React, { useEffect, useState, Fragment } from "react";
import { getOneUser, updateUser } from "../../redux/actions/usersActions"
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import "./index.css";

const TalkList = () => {
  const [talk, setTalk] = useState({
    title: "",
    description: "",
    imagen: 'https://media-exp1.licdn.com/dms/image/C4E0BAQGy6GZmHb_SXA/company-logo_200_200/0/1603651276024?e=1619654400&v=beta&t=kRb_lMNqQF3oGVL9IrNYVxKdJf1qDW3FNTRdSeIu4zI',
    url: ""
  });





  //Me traigo el talk seleccionado para poder editarlo
  //const infoUser = useSelector(state => state.user.user)
  //Estado necesario para editar el talk
  const [talkId, setTalkId] = useState(null)
  const [talk, setUserInfo] = useState({
    firstName: infoUser.firstName,
    lastName: infoUser.lastName,
    email: infoUser.email,
    role: infoUser.role
  })

  const [modalState, setModalState] = useState(false)
  const dispatch = useDispatch();
  const history = useHistory();


  const getUsers = () => {
    axios.get("http://localhost:5000/users")
      .then(res => {
        setAllUsers(res.data);
      })
  };

  const getUsersRole = (role) => {
    axios.get(`http://localhost:5000/users/${role}`)
      .then(res => setAllUsers(res.data));
  };


  const handleDelete = (id) => {
    if (confirm("¿Quiere eliminar al talk?") === true) {
      axios.delete(`http://localhost:5000/users/${id}`)
        .then(res => getUsers());
    };
  };



  const getUserHandler = (id) => {
    //id del talk
    setTalkId(id)
    //busco a ese talk en la base de datos
    dispatch(getOneUser(id))
    setModalState(true)
  }

  const onChangeHandler = (e) => {
    setUserInfo({
      ...user,
      [e.target.name]: e.target.value
    })
    infoUser[e.target.name] = e.target.value
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(updateUser(infoUser._id, user))
    setModalState(false)
    const alert = confirm("Cambios guardados");
    if (alert === true) {
      location.reload()
      history.push("/users")
    }
  }

  const roleArray = ["student", "guest", "instructor"]
  const filterRoleArray = roleArray.filter(e => e !== infoUser.role)

  console.log("user", user)
  console.log("infoUser", infoUser)



  return (
    <div >
      <Link to='/createUser'>
        <button type="button">
          <i className="fas fa-plus-circle me-2" />
                  Crear talk
              </button>
      </Link>
      <Link to='/'>
        <button type="button">
          <i className="fas fa-home" />
                  Inicio
              </button>
      </Link>
      <br />
      <h2><i className="fas fa-users" />    talks</h2>
      <div>
        <button onClick={() => roleHandler("")}>Todos los talks</button>
        <button onClick={() => roleHandler("instructor")}>Instructores</button>
        <button onClick={() => roleHandler("student")}>Estudiantes</button>
        <button onClick={() => roleHandler("guest")}>Invitados</button>
        <button onClick={() => roleHandler("banned")}>banned</button>
      </div>
      <table >
        <thead >
          <tr >
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Email</th>
            <th scope="col">Rol</th>
          </tr>
        </thead>
        {<tbody>
          {
            allUsers.map((user, index) => {
              const { firstName, lastName, email, role, _id, isSuperAdmin } = user;
              if (isSuperAdmin === false) {

                return (
                  <tr key={index}>
                    <td >{firstName}</td>
                    <td>{lastName}</td>
                    <td>{email}</td>
                    <td>{role}</td>
                    <td >
                      <button onClick={() => { getUserHandler(_id) }}> <a href="#openModal"><i className="fas fa-user-edit" /></a></button>
                      {modalState === true ?

                        <Fragment>
                          <div id="openModal" title="close" className="modalDialog">
                            <div><a href="#close" onClick={() => { setModalState(false) }} className="close">X</a>
                              <h2>Editar talk</h2>
                              <form>
                                <p>
                                  Nombre
                                    <input onChange={onChangeHandler} name="firstName" value={infoUser.firstName}></input>
                                </p>
                                <p>
                                  Apellido
                                    <input onChange={onChangeHandler} name="lastName" value={infoUser.lastName} ></input>
                                </p>
                                <p>
                                  Email
                                    <input onChange={onChangeHandler} name="email" value={infoUser.email} ></input>
                                </p>
                                <p>
                                  Rol
                                                                <div>
                                    {infoUser.role === "guest" ?
                                      <input onChange={onChangeHandler} type="radio" name="role" value="guest" checked />
                                      :
                                      <input onChange={onChangeHandler} type="radio" name="role" value="guest" />
                                    }
                                    <label >Visitante</label>

                                    {infoUser.role === "student" ?
                                      <input onChange={onChangeHandler} type="radio" name="role" value="student" checked />
                                      :
                                      <input onChange={onChangeHandler} type="radio" name="role" value="student" />
                                    }
                                    <label >Estudiante</label>

                                    {infoUser.role === "instructor" ?
                                      <input onChange={onChangeHandler} type="radio" name="role" value="instructor" checked />
                                      :
                                      <input onChange={onChangeHandler} type="radio" name="role" value="instructor" />
                                    }
                                    <label >Instructor</label>
                                  </div>
                                </p>
                                <button type="submit" onClick={handleSubmit}>GUARDAR CAMBIOS</button>
                              </form>

                            </div>
                          </div>
                        </Fragment>
                        : console.log("")
                      }
                    </td>
                    <button type="submit" onClick={() => handleDelete(_id)} ><i className="fas fa-trash-alt" /></button>
                  </tr>
                );
              }
            })}
        </tbody>}
      </table>
    </div>

  );
};

export default TalkList;