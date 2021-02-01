import React, { useEffect, useState } from "react";
import axios from "axios";
import './index.css'

const lectureList = () => {
    const [allLectures, setAllLectures] = useState([{
        title: '',
        imagen: '',
        video: [],
        modulo: '',
        description: '',
        _id: '',
    }]);
    const [estadoId, setEstadoId] = useState('');

    const [oneLecture, setOneLecture] = useState({
        title: "",
        description: ""
    });

    useEffect(() => {
        getLectures();
    }, []);

    const getLectures = () => {
        axios.get("http://localhost:5000/lectures")
            .then(res => {
                setAllLectures(res.data);
            });
    };

    const handleDelete = (id) => {
        if (confirm("¿Quiere eliminar la Lecture?") === true) {
            axios.delete(`http://localhost:5000/lectures/${id}`)
                .then(res => getLectures());
        };
    };

    const handleSubmit = (id) => {
        const { title, description } = oneLecture;
        axios.patch(`http://localhost:5000/lectures/${id}`, { title, description })
            .then(res => {
                getLectures(),
                    setOneLecture({
                        title: "",
                        description: ""
                    });
            });
    };

    const handleChange = (e) => {
        setOneLecture({
            ...oneLecture,
            [e.target.name]: e.target.value
        });
    };


    return (
        <div>
            <div>
                <table >
                    <thead >
                        <tr >
                            <th scope="col">Modulo</th>
                            <th scope="col">Lecture</th>
                            <th scope="col">Descripcion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allLectures.map((lecture, index) => {
                                const { modulo, title, _id, description } = lecture;
                                return (
                                    <tr key={index}>
                                        <td>{modulo}</td>
                                        <td>{title}</td>
                                        <td>{description}</td>
                                        <td ><button onClick={() => setEstadoId(_id)} ><a href="#openModal"> <i className="fas fa-user-edit" /></a></button></td>
                                        <div id="openModal" class="modalDialog">
                                            <div>	<a href="#close" title="Close" class="close">X</a>
                                                <h2>Editar Lecture</h2>
                                                <form onSubmit={() => handleSubmit(estadoId)}><a href="#close" title="Close" class="close"></a>
                                                    <p>
                                                        Titulo
                                                        <input name="title" onChange={e => handleChange(e)} />
                                                    </p>
                                                    <p>
                                                        Descripcion
                                                        <input name="description" onChange={e => handleChange(e)}></input>
                                                    </p>
                                                    <button type="submit"  >GUARDAR CAMBIOS</button>
                                                </form>
                                            </div>





                                        </div>
                                        <td><button type="submit" onClick={() => handleDelete(_id)} > <i className="fas fa-trash-alt" /></button></td>
                                        <td><button type="submit"><i className="fas fa-plus-circle me-2" /> Agregar video</button></td>
                                    </tr>)
                            })}
                    </tbody>
                </table>
            </div>



        </div >
    )
};

export default lectureList;