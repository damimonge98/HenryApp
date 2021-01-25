import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";



const CreateUser = () => {
    const history = useHistory();
    const [user, setUser] = useState({
        email: "",
        first_name: "",
        last_name: "",
        password: "",
        is_super_admin: false,
        role: "",
        avatar: ""
    });


    function handleChange(e) {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e) {
        const { email, first_name, last_name, password, role } = user;
        axios.post("http://localhost:5000/users", user, { email, first_name, last_name, password, role })
            .then(res => {
                console.log(res, "Aaaaa")
            })
    }


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
                            name="first_name"
                            value={user.first_name}
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
                            name="last_name"
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
                                name="is_super_admin"
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
                            <input /* onChange={(e) => { handleChange(e); }} */ type="radio" name="role" />
                            <label >Visitante</label>
                            <input /* onChange={(e) => { handleChange(e); }}  */ type="radio" name="role" />
                            <label >Estudiante</label>
                            <input /* onChange={(e) => { handleChange(e); }} */ type="radio" name="role" />
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
            </form>
        </div>
    );
}


export default CreateUser;