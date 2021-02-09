import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { companyRegisterSchema } from '../../yup';

// Actions
import { registerCompany } from '../../redux/actions/companiesActions';

// Components
import Input from '../Input';

// Styles
import {
  RegisterFormWrapper,
  LogoWrapper,
  RegisterButton,
  UserLogo,
  SpanLink
} from '../RegisterForm/styles';

import HenryLogo from '../../assets/images/henry.png';

const CompanyRegisterForm = () => {
  const { register, handleSubmit, errors, trigger } = useForm({
    resolver: yupResolver(companyRegisterSchema)
  });

  const { isAuth } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (isAuth) history.push('/');
  }, [isAuth]);

  const onSubmit = (data) => {
    dispatch(registerCompany(data));
    history.push('/login');
  };

  return (
    <RegisterFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <LogoWrapper>
        <Link to='/'>
          <img src={HenryLogo} alt='Henry Logo' />
        </Link>
      </LogoWrapper>

      <Input
        type='text'
        name='name'
        label='Nombre de la empresa'
        required
        autoComplete='off'
        ref={register}
        onChange={() => trigger('name')}
        error={errors.name?.message}
      />

      <Input
        type='text'
        name='email'
        label='Email de contacto'
        required
        autoComplete='off'
        ref={register}
        onChange={() => trigger('email')}
        error={errors.email?.message}
      />

      <Input
        type='password'
        name='password'
        label='Contraseña'
        required
        autoComplete='off'
        ref={register}
        onChange={() => trigger(['password', 'repassword'])}
        error={errors.password?.message}
      />

      <Input
        type='password'
        name='repassword'
        label='Confirmar contraseña'
        required
        autoComplete='off'
        ref={register}
        onChange={() => trigger(['password', 'repassword'])}
        error={errors.repassword?.message}
      />

      <Input
        type='url'
        name='logo'
        label='Logo'
        autoComplete='off'
        ref={register}
        onChange={() => trigger('logo')}
        error={errors.logo?.message}
      />

      <RegisterButton>
        <UserLogo />
        Registrate
      </RegisterButton>
      <SpanLink>
        Ya tenés una cuenta? <Link to='/login'>Ingresá acá</Link>
      </SpanLink>
    </RegisterFormWrapper>
  );
};

export default CompanyRegisterForm;
