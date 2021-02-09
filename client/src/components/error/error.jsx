import React from 'react';
import { Link } from 'react-router-dom';

import './estilos.css'
const error = () => {
    return (
        <div className='pag'>
            <div >
                <img className='robot' src='error.png'></img>
            </div>
            <div >
                <button className='button'>
                    <Link to='/' className='text' style={{ textDecoration: 'none' }}>
                        <h6>volver al</h6>
                        <h1>INICIO</h1>

                    </Link>
                </button>
            </div>
        </div>
    )
};

export default error