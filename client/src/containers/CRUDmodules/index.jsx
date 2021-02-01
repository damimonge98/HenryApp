import React, { useEffect, useState } from "react";
import axios from "axios";

const ModuleList = () => {
    const [allModules, setAllModules] = useState([{
        title: '',
        description: '',
        lectures: [],
        order: null,
        _id: ''
    }]);

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

    return (
        <div>
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
                                    <td ><button><i class="fas fa-user-edit" /></button></td>
                                    <td><button type="submit" onClick={() => handleDelete(_id)} > <i class="fas fa-trash-alt" /></button></td>
                                </tr>)
                        })}
                </tbody>
            </table>
        </div>
    );
};

export default ModuleList;