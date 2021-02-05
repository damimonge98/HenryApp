import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getUserById } from '../../redux/actions/usersActions';
import Layout from '../Layout';
import './estilos.css'

const Payment = () => {
    const { isAuth, user } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserById());
    }, []);



    return (
        <div>{
            isAuth ?
                <Layout>
                    <div>{user.debt == 0
                        ?
                        <div>
                            <h2 className="hurra">Hurra!</h2>
                            <div className='info'>
                                <h3>{user.firstName}, en este momento no tenés deuda con Henry.</h3>
                            </div>
                        </div>
                        :
                        <div>
                            <h2 className="hurra">Estado de cuenta</h2>
                            <div className='info'>
                                <h3>{user.firstName}, tu deuda con Henry es de usd {user.debt}.</h3>
                            </div>
                        </div>

                    } </div>
                </Layout>
                : null
        }</div>
    );



};

export default Payment;