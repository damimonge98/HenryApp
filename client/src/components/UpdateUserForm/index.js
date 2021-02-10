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

const UpdateUserForm = ({ modalRef, userData, modules }) => {
  const { register, handleSubmit, errors, trigger } = useForm({
    resolver: yupResolver(updateUserSchema)
  });

  // TODO: necesito hacer un req para traer los datos del usuario ?
  // const { isAuth } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (data) => {
    console.log({ ...data, currentModule: Number(data.currentModule) });
    dispatch(updateUser(userData._id, { ...data, currentModule: Number(data.currentModule) }));
  };

  if (!userData)
    return <Loading />;

  console.log(modules);
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
            text: "Student",
            value: "student"
          },
          {
            text: "Instructor",
            value: "instructor"
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
        error={errors.isSuperAdmin?.message}
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
        name="currentModule"
        label="Current Module"
        required
        ref={register}
        defaultValue={userData.currentModule}
        onSelect={() => trigger("currentModule")}
        error={errors.currentModule?.message}
        options={modules.sort((a, b) => a.order - b.order).map(m => {
          return ({ text: m.title, value: Number(m.order) });
        })}
      />

      <UpdateButton>
        Editar Usuario
      </UpdateButton>
    </UpdateUserFormWrapper>
  );
};

export default UpdateUserForm;
