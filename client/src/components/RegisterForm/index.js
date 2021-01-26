import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from "../../yup";

import Input from '../Input';
import { RegisterFormWrapper, RegisterButton, SpanLink, LogoWrapper, UserLogo } from './styles';
import henryLogo from "../../assets/images/henry.png";

const RegisterForm = () => {

  const { register, handleSubmit, watch, errors, trigger } = useForm({
    resolver: yupResolver(registerSchema)
  });

  // const [registerData, setRegisterData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   password: "",
  // });

  // const handleChange = (e) => {
  //   console.log(e.target.value);
  //   setRegisterData({
  //     ...registerData,
  //     [e.target.name]: e.target.value
  //   });
  // };

  const onSubmit = (data) => {
    console.log(data);
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
        ref={register}
        onChange={() => trigger("firstName")}
        error={errors.firstName?.message}
      />

      <Input
        type="text"
        name="lastName"
        label="Last Name"
        required
        ref={register}
        onChange={() => trigger("lastName")}
        error={errors.lastName?.message}
      />

      <Input
        type="text"
        name="email"
        label="Email"
        required
        ref={register}
        onChange={() => trigger("email")}
        error={errors.email?.message}
      />

      <Input
        type="text"
        name="password"
        label="Password"
        required
        ref={register}
        onChange={() => trigger(["password", "repassword"])}
        error={errors.password?.message}
      />

      <Input
        type="text"
        name="repassword"
        label="Confirm Password"
        required
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
