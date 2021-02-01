import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";



const CreateModule = () => {
    const [module, setModule] = useState({
        title: "",
        lectures: [],
        description: "",
    });

    function handleChange(e) {
        setModule({
            ...module,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = () => {
        const { title, description } = module;
        axios.post("http://localhost:5000/modules", { title, description })
            .then();
    };

    return (
        <div >
            <div>
                <h3>Crear un módulo</h3>
            </div>
            <form onSubmit={handleSubmit} >
                <div >
                    <label >
                        Title
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
                <div>
                    <div>
                        <button type="submit">
                            Crear módulo
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

export default CreateModule;