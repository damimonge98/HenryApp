import React, { useEffect, useState } from "react";
import axios from "axios";
import ModuleCard from '../../components/ModuleCard/index'
import './styles.css';

const Modules = () => {
    const [modulos, setModulos] = useState([{
        _id: "",
        description: "",
        title: "",
        lectures: []
    }]);

    useEffect(() => {
        getModulos()
    }, []);

    const getModulos = () => {
        axios.get("http://localhost:5000/modules/")
            .then(res => {
                console.log(res.data)
                setModulos(res.data)
                console.log(modulos, 'modulos')
            });
    };
    return (
        <div>
            <h2>Nombre del modulo</h2>
            <br />
            <div className="modules">
                {modulos.map((modulo, index) => {
                    return (
                        <div key={index}>
                            <ModuleCard module={modulo} />
                        </div>
                    );
                })}
            </div>
        </div>
    )
};
export default Modules;


