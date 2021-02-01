import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";



const CreateLecture = (id) => {
    const [lecture, setLecture] = useState({
        title: "",
        video: [],
        imagen: 'https://media-exp1.licdn.com/dms/image/C4E0BAQGy6GZmHb_SXA/company-logo_200_200/0/1603651276024?e=1619654400&v=beta&t=kRb_lMNqQF3oGVL9IrNYVxKdJf1qDW3FNTRdSeIu4zI',
        description: '',
    });

    function handleChange(e) {
        setLecture({
            ...lecture,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = () => {
        const { title, description, imagen } = lecture;
        axios.post(`http://localhost:5000/lectures/${id}`, { title, description, imagen })
            .then();
    };

    return (
        <div >
            <div>
                <h3>Crear un lecture</h3>
            </div>
            <form onSubmit={handleSubmit} >
                <div >
                    <label >
                        Nombre
           </label>
                    <div >
                        <input
                            onChange={(e) => { handleChange(e); }}
                            name="title"
                            type="text"
                            required
                        />
                    </div>
                </div>
                <div >
                    <label >
                        Descripción
          </label>
                    <div >
                        <textarea
                            onChange={(e) => { handleChange(e); }}
                            name="description"
                            type="text"
                            required
                        />
                    </div>
                </div>
                <div >
                    <label >
                        Imagen
           </label>
                    <div >
                        <input
                            onChange={(e) => { handleChange(e); }}
                            name="imagen"
                            type="text"
                            placeholder='Puede agregar una imagen'
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <button type="submit">
                            Crear lecture
                        </button>
                    </div>
                </div>
            </form><br />
            <Link to='/'>
                <button type="button">
                    <i className="fas fa-home" />
                  Inicio
              </button>
            </Link>
        </div >
    );
};

export default CreateLecture;