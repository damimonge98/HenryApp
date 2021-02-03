// import React, { useEffect, useState, Fragment } from "react";
// import { getOneUser, updateUser } from "../../redux/actions/usersActions";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { useHistory, Link } from "react-router-dom";

// import Layout from "../../containers/Layout";
// import Table from "../Table";

// import "./index.css";

// const UserList = () => {

//   const [allUsers, setAllUsers] = useState([{
//     firstName: "",
//     lastName: "",
//     email: "",
//     rol: "",
//     _id: ""
//   }]);


//   const [selectedRole, setSelectedRole] = useState("");

//   const [modalState, setModalState] = useState(false);

//   useEffect(() => {
//     if (selectedRole === "") {
//       return getUsers();
//     } else {
//       return getUsersRole(selectedRole);
//     }
//   }, [selectedRole]);

//   const getUsers = () => {
//     axios.get("http://localhost:5000/users")
//       .then(res => {
//         setAllUsers(res.data);
//       });
//   };


//   //Me traigo el usuario seleccionado para poder editarlo
//   const infoUser = useSelector(state => state.user.user);
//   //Estado necesario para editar el usuario
//   const [userId, setUserId] = useState(null);
//   const [user, setUserInfo] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     role: ""
//   });

//   const [input, setInput] = useState(false);
//   const [idInput, setIdInput] = useState(null);
//   const dispatch = useDispatch();
//   const history = useHistory();

//   const onChangeHandler = (e) => {
//     setUserInfo({
//       ...user,
//       [e.target.name]: e.target.value
//     });
//     infoUser[e.target.name] = e.target.value;
//   };

//   useEffect(() => {
//     if (selectedRole === "") {
//       return getUsers();
//     } else {
//       return getUsersRole(selectedRole);
//     }
//   }, [selectedRole]);

//   const handleInput = (e) => {
//     setInput(!input);

//   };

//   const getUsersRole = (role) => {
//     axios.get(`http://localhost:5000/users/${role}`)
//       .then(res => setAllUsers(res.data));
//   };


//   const handleDelete = (id) => {
//     if (confirm("¿Quiere eliminar al usuario?") === true) {
//       axios.delete(`http://localhost:5000/users/${id}`)
//         .then(res => getUsers());
//     };
//   };

//   const roleHandler = (role) => {
//     setSelectedRole(role);
//   };

//   const getUserHandler = (id) => {
//     //id del usuario
//     setUserId(id);
//     //busco a ese usuario en la base de datos
//     dispatch(getOneUser(id));
//     setModalState(true);
//   };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   dispatch(updateUser(infoUser._id, user));
//   //   setModalState(false);
//   //   const alert = confirm("Cambios guardados");
//   //   if (alert === true) {
//   //     location.reload();
//   //     history.push("/users");
//   //     const handleCheckInput = (e) => {
//   //       event.preventDefault();
//   //       setInput(false);

//   //     };
//   //   };

//   const roleArray = ["student", "guest", "instructor"];
//   const filterRoleArray = roleArray.filter(e => e !== infoUser.role);
//   console.log("user", user);
//   console.log("infoUser", infoUser);

//   const handleIdInput = (id) => {
//     event.preventDefault();
//     setIdInput(id);
//   };

//   const handleCheckInput = (e) => {
//     event.preventDefault();
//     setInput(false);
//   };

//   const [file, setFile] = useState("");

//   const handleChangeFile = (e) => {
//     setFile({
//       [e.target.name]: event.target.files[0]
//     });
//   };



//   const handleSubmitFile = (e) => {
//     e.preventDefault();
//   };
//     console.log(file);
//     const data = new FormData();
//     data.append('users', file.users, file.users.name);
//     axios
//       .post("http://localhost:5000/upload/users", data, {
//         // onUploadProgress: ProgressEvent => {
//         //   // this.setState({
//         //   //   loaded: (ProgressEvent.loaded / ProgressEvent.total * 100),
//         //   // });
//         // },
//       })
//       .then(res => {
//         console.log(res.statusText);
//       });



//   const rows = [
//     {
//       id: "1",
//       fullName: "Alejo Gschwind",
//       email: 'alejogschwind.97@gmail.com',
//       role: "student",
//       isAdmin: true,
//     },
//     {
//       id: "2",
//       fullName: "Alejo Gschwind",
//       email: 'alejogschwind.97@gmail.com',
//       role: "student",
//       isAdmin: true,
//     },
//     {
//       id: "3",
//       fullName: "Alejo Gschwind",
//       email: 'alejogschwind.97@gmail.com',
//       role: "student",
//       isAdmin: true,
//     },
//     {
//       id: "3",
//       fullName: "Alejo Gschwind",
//       email: 'alejogschwind.97@gmail.com',
//       role: "student",
//       isAdmin: true,
//     },
//     {
//       id: "2",
//       fullName: "Alejo Gschwind",
//       email: 'alejogschwind.97@gmail.com',
//       role: "student",
//       isAdmin: true,
//     },
//     {
//       id: "3",
//       fullName: "Alejo Gschwind",
//       email: 'alejogschwind.97@gmail.com',
//       role: "student",
//       isAdmin: true,
//     },
//     {
//       id: "3",
//       fullName: "Alejo Gschwind",
//       email: 'alejogschwind.97@gmail.com',
//       role: "student",
//       isAdmin: true,
//     },
//     {
//       id: "2",
//       fullName: "Alejo Gschwind",
//       email: 'alejogschwind.97@gmail.com',
//       role: "student",
//       isAdmin: true,
//     },
//     {
//       id: "3",
//       fullName: "Alejo Gschwind",
//       email: 'alejogschwind.97@gmail.com',
//       role: "student",
//       isAdmin: true,
//     },
//     {
//       id: "3",
//       fullName: "Alejo Gschwind",
//       email: 'alejogschwind.97@gmail.com',
//       role: "student",
//       isAdmin: true,
//     },
//   ];


//   return (<Layout>
//     {/* <input type="file" onChange={handleChangeFile} name="users" />
//     <button onClick={handleSubmitFile}>Send</button> */}
//     <Table columns={columns} rows={rows} actions={actions} />
//   </Layout>);
//   return (
//     <div >
//       {/* <form method="post" action="http://localhost:5000/upload/users" onSubmit={handleSubmitFile} enctype="multipart/form-data"> */}

//       {/* </form> */}
//       <Link to='/createUser'>
//         <button type="button">
//           <i class="fas fa-plus-circle me-2" />
//                   Crear usuario
//               </button>
//       </Link>
//       <Link to='/'>
//         <button type="button">
//           <i class="fas fa-home" />
//                   Inicio
//               </button>
//       </Link>
//       <br />
//       <h2><i class="fas fa-users" />    Usuarios</h2>
//       <div>
//         <button onClick={() => roleHandler("")}>Todos los usuarios</button>
//         <button onClick={() => roleHandler("instructor")}>Instructores</button>
//         <button onClick={() => roleHandler("student")}>Estudiantes</button>
//         <button onClick={() => roleHandler("guest")}>Invitados</button>
//         <button onClick={() => roleHandler("banned")}>banned</button>
//       </div>
//       {/* <table >
//           <thead >
//             <tr >
//               <th scope="col">Nombre</th>
//               <th scope="col">Apellido</th>
//               <th scope="col">Email</th>
//               <th scope="col">Rol</th>
//             </tr>
//           </thead>
//           {<tbody>
//             {
//               allUsers.map((user, index) => {
//                 const { firstName, lastName, email, role, _id } = user;
//                 return (
//                   <tr key={index}>
//                     <td >{firstName}</td>
//                     <td>{lastName}</td>
//                     <td>{email}</td>
//                     <td>{role}</td>
//                     <td >
//                       <button onClick={() => { getUserHandler(_id); }}> <a href="#openModal"><i class="fas fa-user-edit" /></a></button>
//                       {modalState === true ?

//                         <Fragment>
//                           <div id="openModal" title="close" class="modalDialog">
//                             <div><a href="#close" onClick={() => { () => { setModalState(false); }; setInput(false); }} class="close">X</a>
//                               <h2>Editar Usuario</h2>
//                               <form>
//                                 <label>
//                                   Nombre  {input === true && idInput === 1 ?
//                                     <Fragment>
//                                       <input onChange={onChangeHandler} name="firstName" value={user.name} readonly></input>
//                                       <button onClick={handleCheckInput}><i class="fa fa-check" aria-hidden="true"></i></button>
//                                     </Fragment>
//                                     :

//                                     <Fragment>
//                                       <input name="firstName" value={infoUser.firstName} readonly></input>
//                                       <button onClick={() => { handleInput(); handleIdInput(1); }}><i class="fa fa-pencil" aria-hidden="true"></i></button>
//                                     </Fragment>


//                                   }
//                                 </label>
//                                 <p>
//                                   Apellido  {input === true && idInput === 2 ?
//                                     <Fragment>
//                                       <input onChange={onChangeHandler} name="lastName" value={user.name} readonly></input>
//                                       <button onClick={handleCheckInput}><i class="fa fa-check" aria-hidden="true"></i></button>
//                                     </Fragment>
//                                     :

//                                     <Fragment>
//                                       <input name="lastName" value={infoUser.lastName} readonly></input>
//                                       <button onClick={() => { handleInput(); handleIdInput(2); }}><i class="fa fa-pencil" aria-hidden="true"></i></button>
//                                     </Fragment>
//                                   }
//                                 </p>
//                                 <p>
//                                   Email {input === true && idInput === 3 ?
//                                     <Fragment>
//                                       <input onChange={onChangeHandler} name="email" value={user.name} readonly></input>
//                                       <button onClick={handleCheckInput}><i class="fa fa-check" aria-hidden="true"></i></button>
//                                     </Fragment>
//                                     :

//                                     <Fragment>
//                                       <input name="email" value={infoUser.email} readonly></input>
//                                       <button onClick={() => { handleInput(); handleIdInput(3); }}><i class="fa fa-pencil" aria-hidden="true"></i></button>
//                                     </Fragment>
//                                   }
//                                 </p>
//                                 <p>
//                                   Rol
//                                                                 <div>
//                                     {infoUser.role === "guest" ?
//                                       <input onChange={onChangeHandler} type="radio" name="role" value="guest" checked />
//                                       :
//                                       <input onChange={onChangeHandler} type="radio" name="role" value="guest" />
//                                     }
//                                     <label >Visitante</label>

//                                     {infoUser.role === "student" ?
//                                       <input onChange={onChangeHandler} type="radio" name="role" value="student" checked />
//                                       :
//                                       <input onChange={onChangeHandler} type="radio" name="role" value="student" />
//                                     }
//                                     <label >Estudiante</label>

//                                     {infoUser.role === "instructor" ?
//                                       <input onChange={onChangeHandler} type="radio" name="role" value="instructor" checked />
//                                       :
//                                       <input onChange={onChangeHandler} type="radio" name="role" value="instructor" />
//                                     }
//                                     <label >Instructor</label>
//                                   </div>
//                                 </p>
//                                 <button type="submit" onClick={handleSubmit}>GUARDAR CAMBIOS</button>
//                               </form>

//                             </div>
//                           </div>
//                         </Fragment>
//                         : <span>Hola</s
//                       }
//                     </td>
//                     <button type="submit" onClick={() => handleDelete(_id)} ><i class="fas fa-trash-alt" /></button>
//                   </tr>
//                 );
//               })}
//           </tbody>}
//         </table> */}
//     </div>
//   );
//   // };
// };

// export default UserList;