import React, { useState } from 'react';

import { RegisterFormWrapper, RegisterButton, SpanLink } from './styles';
import Input from '../Input';

import henryLogo from "../../assets/images/henry.png";
import { LogoWrapper } from './styles';
import { Link } from 'react-router-dom';
import { UserLogo } from '../LoginForm/styles';

const RegisterForm = () => {

  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(registerData);
  };

  return (
    <RegisterFormWrapper onSubmit={handleSubmit}>
      <LogoWrapper>
        <img src={henryLogo} alt="Henry Logo" />
      </LogoWrapper>

      <Input type="text" name="firstName" label="First Name" required value={registerData.firstName} onChange={handleChange} />
      <Input type="text" name="lastName" label="Last Name" required value={registerData.lastName} onChange={handleChange} />
      <Input type="email" name="email" label="Email" required value={registerData.email} onChange={handleChange} />
      <Input type="password" name="password" label="Password" required value={registerData.password} onChange={handleChange} />
      <Input type="password" name="repassword" label="Confirm Password" required value={registerData.repassword} onChange={handleChange} />
      <RegisterButton>
        <UserLogo />
        Register
      </RegisterButton>
      <SpanLink>Do you have an account? <Link to="/login">Login here</Link></SpanLink>
    </RegisterFormWrapper>
  );
};

export default RegisterForm;
