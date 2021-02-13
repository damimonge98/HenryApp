import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { updateUserSchema } from "../../yup";
import { updateUser } from "../../redux/actions/usersActions";

import Input from '../Input';
import Loading from '../Loading';
import { UpdateUserFormWrapper, UpdateButton } from '../UpdateUserForm/styles';

const UpdateDebtForm = ({ modalRef, userData }) => {
    const { register, handleSubmit, errors, trigger } = useForm({
        resolver: yupResolver(updateUserSchema)
    });

    // TODO: necesito hacer un req para traer los datos del usuario ?
    // const { isAuth } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const history = useHistory();

    const onSubmit = (data) => {
        dispatch(updateUser(userData._id, { ...data, debt: data.debt }));
    };

    if (!userData)
        return <Loading />;

    return (
        <UpdateUserFormWrapper onSubmit={handleSubmit(onSubmit)}>
            <h3>{userData.firstName} {userData.lastName}:</h3>
            <h4>{userData.debt}</h4>

            <Input
                type="text"
                name="debt"
                label="Pago"
                autoComplete="off"

                ref={register}
                onChange={() => trigger("debt")}
                error={errors.debt?.message}
            />

            <Input
                type="text"
                name="debt"
                label="Multa"
                autoComplete="off"
                ref={register}
                onChange={() => trigger("debt")}
                error={errors.debt?.message}
            />

            <UpdateButton>
                Editar Estado de Cuenta
      </UpdateButton>
        </UpdateUserFormWrapper>
    );
};

export default UpdateDebtForm;
