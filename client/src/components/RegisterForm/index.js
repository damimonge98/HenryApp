import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from "../../yup";

import Input from '../Input';
import { RegisterFormWrapper, RegisterButton, SpanLink, LogoWrapper, UserLogo } from './styles';
import henryLogo from "../../assets/images/henry.png";

import { registerUser } from "../../redux/actions/authActions";

const RegisterForm = () => {

  const { register, handleSubmit, errors, trigger } = useForm({
    resolver: yupResolver(registerSchema)
  });

  const { isAuth } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (isAuth) history.push("/");
  }, [isAuth]);

  const onSubmit = (data) => {
    dispatch(registerUser(data));
    history.push("/login");
  };

  return (
    <RegisterFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <LogoWrapper>
        <img src={henryLogo} alt="Henry Logo" />
      </LogoWrapper>

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

      <Input
        type="text"
        name="email"
        label="Email"
        required
        autocomplete="off"
        ref={register}
        onChange={() => trigger("email")}
        error={errors.email?.message}
      />

      <Input
        type="text"
        name="password"
        label="Password"
        required
        autocomplete="off"
        ref={register}
        onChange={() => trigger(["password", "repassword"])}
        error={errors.password?.message}
      />

      <Input
        type="text"
        name="repassword"
        label="Confirm Password"
        required
        autocomplete="off"
        ref={register}
        onChange={() => trigger(["password", "repassword"])}
        error={errors.repassword?.message}
      />

      <RegisterButton>
        <UserLogo />
        Register
      </RegisterButton>
      <SpanLink>Do you have an account? <Link to="/login">Login here</Link></SpanLink>
    </RegisterFormWrapper>
  );
};

export default RegisterForm;
