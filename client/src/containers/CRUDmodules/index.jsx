import React, { useEffect, useState } from "react";
import axios from "axios";
import CreateModule from '../../components/createModule/index';
import "./estilos.css";

const ModuleList = () => {
    const [allModules, setAllModules] = useState([{
        title: '',
        description: '',
        lectures: [],
        order: null,
        _id: ''
    }]);
    const [oneId, setOneId] = useState(null);

    useEffect(() => {
        getModules();
    }, []);

    const getModules = () => {
        axios.get("http://localhost:5000/modules/")
            .then(res => {
                setAllModules(res.data);
            });
    };

    const handleDelete = (id) => {
        if (confirm("¿Quiere eliminar este módulo? Se eliminarán todas les lectures y videos asociados") === true) {
            axios.delete(`http://localhost:5000/modules/${id}`)
                .then(res => getModules())
        }
    };

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
        const { title, imagen, description } = lecture
        axios.post(`http://localhost:5000/lectures/${oneId}`, { title, imagen, description })
            .then(res => console.log(res));

    };

    return (
        <div>
            <h3>Lista de módulos</h3>
            <table >
                <thead >
                    <tr >
                        <th scope="col">Modulo</th>
                        <th scope="col">Lectures</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allModules.map((module, index) => {
                            const { title, lectures, _id } = module;
                            return (
                                <tr key={index}>
                                    <td >{title}</td>
                                    <td>{lectures.length}</td>
                                    <td ><button><i className="fas fa-user-edit" /></button></td>
                                    <td><button type="submit" onClick={() => handleDelete(_id)} > <i className="fas fa-trash-alt" /></button></td>
                                    <td><button onClick={() => setOneId(_id)}><a href="#openModal"><i className="fas fa-plus-circle me-2" /> Agregar lecture</a></button></td>
                                    <div id="openModal" className="modalDialog">
                                        <div>	<a href="#close" title="Close" className="close">X</a>
                                            <div >
                                                <div>
                                                    <h3>Crear un lecture</h3>
                                                </div>
                                                <form onSubmit={handleSubmit}>
                                                    <div >
                                                        <label >
                                                            Nombre</label>
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
                                                            Descripción</label>
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
                                        </div>
                                    </div>
                                </tr>)
                        })}
                </tbody>
            </table>
            <br />
            <CreateModule></CreateModule>
        </div>
    );
};

export default ModuleList;