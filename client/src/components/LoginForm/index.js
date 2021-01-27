import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from "../../yup";
import { loginUser } from "../../redux/actions/authActions";

import Input from '../Input';
import {
  LoginFormWrapper,
  LoginGithubButton,
  LoginGoogleButton,
  LoginButton,
  Span,
  SpanLink,
  GithubLogo,
  GoogleLogo,
  LogoWrapper,
  UserLogo
} from './styles';

import henryLogo from "../../assets/images/henry.png";

const LoginForm = () => {

  const { register, handleSubmit, watch, errors, trigger } = useForm({
    resolver: yupResolver(loginSchema)
  });

  const { isAuth } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (isAuth) history.push('/');
  }, [isAuth]);

  const onChange = (data) => {
    dispatch(loginUser(data));
    history.push("/");
  };

  return (
    <LoginFormWrapper onSubmit={handleSubmit(onChange)}>
      <LogoWrapper>
        <Link to="/">
          <img src={henryLogo} alt="Henry Logo" />
        </Link>
      </LogoWrapper>
      <LoginGithubButton>
        <GithubLogo />
        Login with Github
      </LoginGithubButton>
      <Span>or</Span>
      <LoginGoogleButton href="http://localhost:5000/auth/google">
        <GoogleLogo />
        Login with Google
      </LoginGoogleButton>
      <Span>or</Span>

      <Input
        type="email"
        name="email"
        label="Email"
        autocomplete="off"
        required
        onChange={() => trigger("email")}
        ref={register}
        error={errors.email?.message}
      />

      <Input
        type="password"
        name="password"
        label="Password"
        autocomplete="off"
        required
        onChange={() => trigger("password")}
        ref={register}
        error={errors.password?.message}
      />

      <LoginButton>
        <UserLogo />
        Login with email
      </LoginButton>
      <SpanLink>Don't have an account? <Link to="/register">Register here</Link></SpanLink>
    </LoginFormWrapper>
  );
};

export default LoginForm;
