import React, { useState } from 'react';

import { LoginFormWrapper, LoginGithubButton, LoginGoogleButton, LoginButton, Span, SpanLink, GithubLogo, GoogleLogo, UserLogo } from './styles';
import Input from '../Input';

import henryLogo from "../../assets/images/henry.png";
import { LogoWrapper } from './styles';
import { Link } from 'react-router-dom';

const LoginForm = () => {

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);
  };

  return (
    <LoginFormWrapper onSubmit={handleSubmit}>
      <LogoWrapper>
        <img src={henryLogo} alt="Henry Logo" />
      </LogoWrapper>
      <LoginGithubButton>
        <GithubLogo />
        Login with github
      </LoginGithubButton>
      <Span>OR</Span>
      <LoginGoogleButton>
        <GoogleLogo />
        Login with google
      </LoginGoogleButton>
      <Span>OR</Span>
      <Input type="email" name="email" label="Email" required value={loginData.email} onChange={handleChange} />
      <Input type="password" name="password" label="Password" required value={loginData.password} onChange={handleChange} />
      <LoginButton>
        <UserLogo />
        Login with email
      </LoginButton>
      <SpanLink>Don't have an account? <Link to="/register">Register here</Link></SpanLink>
    </LoginFormWrapper>
  );
};

export default LoginForm;
