import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { updateUserSchema } from "../../yup";

import Input from '../Input';
import { UpdateUserFormWrapper, RegisterButton, SpanLink, LogoWrapper, UserLogo } from './styles';

import { updateUser } from "../../redux/actions/usersActions";

const UpdateUserForm = ({ closeModal }) => {

  const { register, handleSubmit, errors, trigger } = useForm({
    resolver: yupResolver(updateUserSchema)
  });

  // TODO: necesito hacer un req para traer los datos del usuario ?
  // const { isAuth } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (data) => {
    dispatch(updateUser(data));
    closeModal();
  };

  return (
    <UpdateUserFormWrapper onSubmit={handleSubmit(onSubmit)}>

      <Input
        type="text"
        name="firstName"
        label="First Name"
        required
        autocomplete="off"
        ref={register}
        onChange={() => trigger("firstName")}
        error={errors.firstName?.message}
      />

      <Input
        type="text"
        name="lastName"
        label="Last Name"
        required
        autocomplete="off"
        ref={register}
        onChange={() => trigger("lastName")}
        error={errors.lastName?.message}
      />

      {/* <Input
        type="text"
        name="email"
        label="Email"
        disabeled
        autocomplete="off"
        ref={register}
        onChange={() => trigger("email")}
        error={errors.email?.message}
      /> */}

      <Input
        type="password"
        name="password"
        label="Password"
        required
        autocomplete="off"
        ref={register}
        onChange={() => trigger(["password", "repassword"])}
        error={errors.password?.message}
      />

      <RegisterButton>
        <UserLogo />
        Register
      </RegisterButton>
      <SpanLink>Do you have an account? <Link to="/login">Login here</Link></SpanLink>
    </UpdateUserFormWrapper>
  );
};

export default RegisterForm;
