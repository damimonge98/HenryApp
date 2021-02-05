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
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <button className='home'>
                    <h1 >HOME</h1>
                    </button>

                </Link>
            </div>
        </div>
    )
};

export default error