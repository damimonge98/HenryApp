import React, { useState } from "react";
import axios from "axios";

const CreateModule = () => {
    const [module, setModule] = useState({
        title: '',
        lectures: [],
        description: ''
    });

    function handleChange(e) {
        setModule({
            ...module,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = () => {
        const { title, description } = module;
        axios.post("http://localhost:5000/modules/", { title, description })
            .then(res => console.log(res));
    };

    return (
        <div>
            <h3>Crear un nuevo módulo </h3>
            <form onSubmit={handleSubmit}>
                <div >
                    <label>Nombre</label>
                    <div >
                        <input
                            onChange={(e) => { handleChange(e); }}
                            name="title"
                            value={module.title}
                            type="text"
                            required
                        />
                    </div>
                </div>
                <div >
                    <label >Descripción</label>
                    <div >
                        <textarea
                            onChange={(e) => { handleChange(e); }}
                            name="description"
                            type="text"
                            required
                        />
                    </div>
                </div>
            </form>
            <button type="submit">
                Crear módulo
                        </button>
        </div>
    )
};

export default CreateModule;