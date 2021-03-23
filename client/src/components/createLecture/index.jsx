//en reparación xD

/* import React, { useState } from "react";
import axios from '../../configAxios'; from "axios";



const CreateLecture = (props) => {
    const [lecture, setLecture] = useState({
        title: "",
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
        axios.post(`/lectures/${props.match.params.id}`, {title, imagen, description})
            .then(res => console.log(res));

    };

    return (
        <div >
            <div>
                <h3>Crear un lecture</h3>
            </div>
            <form onSubmit={handleSubmit}>
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
                        <button type='submit'>
                            Crear lecture
                        </button>
                    </div>
                </div>
            </form><br />
        </div >
    );
};

export default CreateLecture; */