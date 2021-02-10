import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { updateUserSchema } from "../../yup";
import { updateUser } from "../../redux/actions/usersActions";

import Input from '../Input';
import Loading from '../Loading';
import Select from '../Select';
import { UpdateUserFormWrapper, UpdateButton } from './styles';

const UpdateUserForm = ({ modalRef, userData }) => {

  const { register, handleSubmit, errors, trigger } = useForm({
    resolver: yupResolver(updateUserSchema)
  });

  // TODO: necesito hacer un req para traer los datos del usuario ?
  // const { isAuth } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (data) => {
    dispatch(updateUser(userData._id, data));
  };

  if (!userData)
    return <Loading />;

  return (
    <UpdateUserFormWrapper onSubmit={handleSubmit(onSubmit)}>

      <Input
        type="text"
        name="firstName"
        label="Nombre"
        required
        autoComplete="off"
        defaultValue={userData.firstName}
        ref={register}
        onChange={() => trigger("firstName")}
        error={errors.firstName?.message}
      />

      <Input
        type="text"
        name="lastName"
        label="Apellido"
        required
        autoComplete="off"
        defaultValue={userData.lastName}
        ref={register}
        onChange={() => trigger("lastName")}
        error={errors.lastName?.message}
      />

      {/* <Input
        type="text"
        name="email"
        label="Email"
        disabeled
        autoComplete="off"
        ref={register}
        onChange={() => trigger("email")}
        error={errors.email?.message}
      /> */}

      <Select
        name="role"
        label="Rol"
        required
        ref={register}
        defaultValue={userData.role}
        onSelect={() => trigger("role")}
        error={errors.role?.message}
        options={[
          {
            text: "Guest",
            value: "guest"
          },
          {
            text: "Estudiante",
            value: "student"
          },
          {
            text: "Instructor",
            value: "instructor"
          },
          {
            text: "Empresa",
            value: "company"
          },
        ]}
      />

      <Select
        name="verifiedCompany"
        label="Empresa verificada"
        required
        ref={register}
        defaultValue={userData.verifiedCompany}
        onSelect={() => trigger("verifiedCompany")}
        error={errors.role?.message}
        options={[
          {
            text: "No",
            value: false
          },
          {
            text: "Yes",
            value: true
          }
        ]}
      />

      <Select
        name="isSuperAdmin"
        label="Admin"
        required
        ref={register}
        defaultValue={userData.isSuperAdmin}
        onSelect={() => trigger("isSuperAdmin")}
        error={errors.role?.message}
        options={[
          {
            text: "No",
            value: false
          },
          {
            text: "Yes",
            value: true
          }
        ]}
      />

      <UpdateButton>
        Editar Usuario
      </UpdateButton>
    </UpdateUserFormWrapper>
  );
};

export default UpdateUserForm;
