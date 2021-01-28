import React, { useEffect, useState } from "react";
import axios from "axios";
import './styles.css';

const Modules = () => {
    const [modulos, setModulos] = useState([{}]);

    useEffect(() => {
        getModulos()
    }, []);

    const getModulos = () => {
        axios.get("http://localhost:5000/modules")
            .then((modulo) => {
                setModulos(modulo.data);
                console.log(modulos)
            });
    };
    return (
        <div>
            <h2>Nombre del modulo</h2>
            <br />
            <div className="lecture-grid">
                {modulos.map((module, index) => {
                    return (
                        <div key={index}>
                            <ModuleCard module={module} />
                        </div>
                    );
                })}
            </div>
        </div>
    )
};
export default Modules;


