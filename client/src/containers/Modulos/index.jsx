import React, { useEffect, useState } from "react";
import axios from "axios";
import ModuleCard from '../../components/ModuleCard/index.jsx'
import './styles.css';

const Modules = ({ moduloid }) => {
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
                setModulos(res.data)
            });
    };

    /*   const getLectures = () => {
          axios.get("http://localhost:5000/lectures/module/", { params: { moduloid } })
              .then(res => {
                  setLectures(res.data)
              }); */

    return (
        <div>
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


