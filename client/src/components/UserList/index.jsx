import React, { useEffect, useState, Fragment } from "react";
import {getOneUser, updateUser} from "../../redux/actions/usersActions"
import axios from "axios";
import {useDispatch, useSelector} from "react-redux"; 
import {useHistory} from "react-router-dom";
import "./index.css";

const UserList = () => {
    const [allUsers, setAllUsers] = useState([{
        first_name: "",
        last_name: "",
        email: "",
        rol: "",
        _id: ""
    }]);
    const [selectedRole, setSelectedRole] = useState("");

    //Estado necesario para editar el usuario
    const [userId, setUserId] = useState (null)
    const [user, setUserInfo] = useState ({
        first_name: "",
        last_name: "",
        email: "",
        role: ""
    })
    
    const [modalState, setModalState] = useState(false)
    const dispatch = useDispatch();
    const history = useHistory();
    //Me traigo el usuario seleccionado para poder editarlo
    const infoUser = useSelector (state => state.user.user)

    useEffect(() => {
        if (selectedRole === "") {
            return getUsers();
        } else {
            return getUsersRole(selectedRole);
        }
    }, [selectedRole]);

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
        if (confirm("¿Quiere eliminar al usuario?") === true) {
            axios.delete(`http://localhost:5000/users/${id}`)
                .then(res => getUsers());
        };
    };

    const roleHandler = (role) => {
        setSelectedRole(role)
    };

    const getUserHandler = (id) => {
        //id del usuario
        setUserId (id)
        //busco a ese usuario en la base de datos
        dispatch (getOneUser(id))
        setUserInfo({
            email: infoUser.email,
            last_name: infoUser.last_name,
            first_name: infoUser.first_name,
            role: infoUser.role
        })
        setModalState(true)
    }

    const onChangeHandler = (e) => {
        setUserInfo({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch (updateUser(infoUser._id, user))
        setModalState(false)
        const alert = confirm ("Cambios guardados");
        if (alert === true) {
        location.reload()
        history.push("/users")
        }
    }

    console.log(userId)

    return (
        <div >
            <h2><i class="fas fa-users" />    Usuarios</h2>
            <div>
                <button onClick={() => roleHandler("")}>Todos los usuarios</button>
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
                            const { first_name, last_name, email, role, _id } = user;
                            return (
                                <tr key={index}>
                                    <td >{first_name}</td>
                                    <td>{last_name}</td>
                                    <td>{email}</td>
                                    <td>{role}</td>
                                    <td >
                                        <button onClick = {()=>{getUserHandler(_id)}}> <a href="#openModal"><i class="fas fa-user-edit" /></a></button>
                                        {modalState === true ?

                                        <Fragment>
                                        <div id="openModal" title= "close" class="modalDialog">
                                            <div><a href="#close" onClick = {()=> {setModalState(false)}}class="close">X</a>
                                        <h2>Editar Usuario</h2>
                                        <form>
                                        <p>
                                            Nombre  <input onChange = {onChangeHandler} name = "first_name" placeholder={infoUser.first_name} value = {user.name}></input>
                                        </p>
                                        <p>
                                            Apellido  <input onChange = {onChangeHandler} name = "last_name" placeholder={infoUser.last_name} value = {user.name}></input>
                                        </p>
                                        <p>
                                            Email  <input onChange = {onChangeHandler} name = "email" placeholder={infoUser.email} value = {user.name} ></input>
                                        </p>
                                        <p>
                                            Rol  <input onChange = {onChangeHandler} name = "role" placeholder={infoUser.role} value = {user.name}></input>
                                        </p>
                                        <button type = "submit" onClick = {handleSubmit}>GUARDAR CAMBIOS</button>
                                        </form>

                                        </div>
                                        </div>
                                </Fragment>
                                : console.log("")            
                                    }      
                                    </td>
                                    <button type="submit" onClick={() => handleDelete(_id)} ><i class="fas fa-trash-alt" /></button>
                                </tr>
                            );
                        })}
                </tbody>}
            </table>
        </div>

    );
};

export default UserList;