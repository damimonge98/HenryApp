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
                                <h3>{user.firstName}, en este momento no tenes deuda con Henry</h3>
                            </div>
                        </div>
                        :
                        <p>{user.firstName}, tu deuda con Henry es de usd {user.debt}. No te preocupes! podras empezar a pagarla cuando consigas trabajo</p>
                    } </div>
                </Layout>
                : null
        }</div>
    );



};

export default Payment;