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
        <Link to="/">
          <img src={henryLogo} alt="Henry Logo" />
        </Link>
      </LogoWrapper>

      <Input
        type="text"
        name="firstName"
        label="Nombre"
        required
        autoComplete="off"
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
        ref={register}
        onChange={() => trigger("lastName")}
        error={errors.lastName?.message}
      />

      <Input
        type="text"
        name="email"
        label="Email"
        required
        autoComplete="off"
        ref={register}
        onChange={() => trigger("email")}
        error={errors.email?.message}
      />

      <Input
        type="password"
        name="password"
        label="Contraseña"
        required
        autoComplete="off"
        ref={register}
        onChange={() => trigger(["password", "repassword"])}
        error={errors.password?.message}
      />

      <Input
        type="password"
        name="repassword"
        label="Confirmar contraseña"
        required
        autoComplete="off"
        ref={register}
        onChange={() => trigger(["password", "repassword"])}
        error={errors.repassword?.message}
      />

      <RegisterButton>
        <UserLogo />
        Registrate
      </RegisterButton>
      <SpanLink>Ya tenés una cuenta? <Link to="/login">Ingresá acá</Link></SpanLink>
    </RegisterFormWrapper>
  );
};

export default RegisterForm;
