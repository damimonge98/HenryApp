import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getUserById } from '../../redux/actions/usersActions';
import axios from "axios";

const Payment = () => {
    const { isAuth, user } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserById());
    }, []);



    return (
        <div>{
            isAuth?

            <div>{user.debt == 0 
                ?
                <p>{user.firstName}, en este momento no tenes deuda con Henry</p>
                : 
                <p>{user.firstName}, tu deuda con Henry es de usd {user.debt}. No te preocupes! podras empezar a pagarla cuando consigas trabajo</p>
            } </div>
            : null
        }</div>
    );



};

export default Payment;