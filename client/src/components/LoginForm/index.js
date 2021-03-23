import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from 'react-router-dom';
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

  const [invalidUser, setInvalidUser] = useState(false);
  const { isAuth, error } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    if (isAuth) history.push('/');
  }, [isAuth]);

  const onChange = async (data) => {
    await dispatch(loginUser(data));
    if (isAuth) {
      setInvalidUser(false);
      history.push('/');
    } else setInvalidUser(true);
  };

  return (
    <LoginFormWrapper onSubmit={handleSubmit(onChange)}>
      <LogoWrapper>
        <Link to="/">
          <img src={henryLogo} alt="Henry Logo" />
        </Link>
      </LogoWrapper>
      <LoginGithubButton href='/auth/github'>
        <GithubLogo />
        Ingresar con GitHub
      </LoginGithubButton>
      <Span>o</Span>
      <LoginGoogleButton href="/auth/google">
        <GoogleLogo />
        Ingresar con Google
      </LoginGoogleButton>
      <Span>o</Span>

      <Input
        type="email"
        name="email"
        label="Email"
        autoComplete="off"
        required
        onChange={() => trigger("email")}
        ref={register}
        error={errors.email?.message}
      />

      <Input
        type="password"
        name="password"
        label="Contraseña"
        autoComplete="off"
        required
        onChange={() => trigger("password")}
        ref={register}
        error={errors.password?.message}
      />

      {invalidUser && <h5>{error.errorMessage}</h5>}

      <LoginButton>
        <UserLogo />
        Ingresar con email
      </LoginButton>
      <SpanLink>No tenés una cuenta? <Link to="/register">Registrate acá</Link></SpanLink>
    </LoginFormWrapper>
  );
};

export default LoginForm;
