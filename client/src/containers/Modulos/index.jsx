import React, { useEffect, useState } from "react";
import axios from "axios";
import ModuleCard from "../../components/ModuleCard/index";
import './styles.css';

export default function Modulos() {
    const [modulos, setModulos] = useState([]);

    useEffect(() => {
        getModulos()
    }, []);

    const getModulos = () => {
        axios.get("http://localhost:5000/modules")
            .then((modulos) => {
                setModulos(modulos.data)
            });
    };
    return (
        <div>
            <h2>Henry Prep Course</h2>
            <br />
            <div className="modules">
                {modulos.map((modulo, index) => {
                    return (
                        <div key={index}>
                            <ModuleCard modulo={modulo} />
                        </div>
                    );
                })}
            </div>
        </div>
    )
};
