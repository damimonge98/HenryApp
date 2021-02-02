import React, { useEffect, useState } from "react";
import axios from "axios";
import ModuleCard from '../../components/ModuleCard/index.jsx'
import './styles.css';
import { useSelector } from "react-redux";



const Modules = ({ moduloid }) => {
    const { user } = useSelector(state => state.auth);
    const [modulos, setModulos] = useState([{
        _id: "",
        description: "",
        title: "",
        order: null,
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

    return (
        <div>
            <div className="modules">
                {modulos.map((modulo, index) => {
                    const { order } = modulo;
                    return (
                        <div key={index}>
                            <ModuleCard module={modulo} available={order <= user.currentModule ? true : false} />
                        </div>
                    );
                })}
            </div>
        </div>
    )
};
export default Modules;


