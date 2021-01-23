import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getIntructors } from "../../redux/actions/usersActions";
import "./index.css";


const CrudInstructor = (props) => {
    const { user } = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getIntructors())
    }, []);

    


    return (
        <div >
                 <h2>Instructores</h2>
 {/*           <div>{user.instructor.map((instructor, index) => {
                const { first_name, last_name, email } = instructor;
                return (
                    <tr key={index}>
                        <td>{first_name}</td>
                        <td>{last_name}</td>
                        <td>{email}</td>
                    </tr>
                )
            })}
            </div>  */}
            <form  >
                <div >
                    <label>Nombre</label>
                    <div >
                        <input
                            placeholder="Insertar nombre"
                            type="text"
                            required
                        />
                    </div>
                </div>
                <div>
                    <label >Apellido</label>
                    <div >
                        <input
                            placeholder="Insertar apellido"
                            type="text"
                            required
                        />
                    </div>
                </div>
                <div >
                    <label>E-mail</label>
                    <div >
                        <input
                            placeholder="Insertar e-mail"
                            type="text"
                            required
                        />
                    </div>
                </div>
                <div>
                    <label >Constraseña</label>
                    <div >
                        <input
                            placeholder="Insertar Contraseña"
                            type="password"
                            required
                        />
                    </div>
                </div>
                <button type="submit" >
                    Crear Instructor
          </button>
            </form>
            <a href="#openModal">Open Modal</a>
            <div id="openModal" class="modalDialog">
                <div>
                    <a href="#close" title="Close" class="close">X</a>
                    <form>
                        <div>
                            <label>
                                Nombre
                            </label>
                            <div>
                                <input placeholder="nombre Usuario" type="text"></input>
                            </div>
                        </div>
                        <div>
                            <label>
                                Apellido
                            </label>
                            <div>
                                <input placeholder="Apellido Usuario" type="text"></input>
                            </div>
                        </div>
                        <div>
                            <label>
                                email
                            </label>
                            <div>
                                <input placeholder="Email Usuario" type="text"></input>
                            </div>
                        </div>
                        <div>
                            <label>
                                De Instructor a SuperAdmin
                            </label>
                            <div>
                                <input placeholder="SuperAdmin" type="text"></input>
                            </div>
                        </div>
                        <div>
                            <button>Editar</button>
                            <button>Cancelar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default CrudInstructor;