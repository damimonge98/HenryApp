import React, { useEffect, useState } from "react";
import axios from "axios";

const lectureList = () => {
    const [allLecures, setAllLectures] = useState([{
        title: '',
        imagen: '',
        video: [],
        modulo: '',
        _id: '',
    }]);

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
                .then(res => getLectures())
        }
    };

    return (
        <div>
            <table >
                <thead >
                    <tr >
                        <th scope="col">Modulo</th>
                        <th scope="col">Lecture</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allLecures.map((lecture, index) => {
                            const { modulo, title, _id } = lecture;
                            return (
                                <tr key={index}>
                                    <td >{modulo}</td>
                                    <td>{title}</td>
                                    <td ><button><i className="fas fa-user-edit" /></button></td>
                                    <td><button type="submit" onClick={() => handleDelete(_id)} > <i className="fas fa-trash-alt" /></button></td>
                                    <td><button type="submit"><i className="fas fa-plus-circle me-2" /> Agregar video</button></td>
                                </tr>)
                        })}
                </tbody>
            </table>
        </div>
    )
};

export default lectureList;