import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getUserById } from '../../redux/actions/usersActions';
import axios from "axios";

const Payment = () => {
    const { users, loading } = useSelector(state => state.user);
    const { isAuth, user } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserById());
    }, []);
    



    return (
        <div>{isAuth ?
            <h1>Tu deuda es de ${user.debt}</h1>
            : null
        }

        </div>
    );
};

export default Payment;