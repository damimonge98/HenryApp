import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { companyRegisterSchema } from '../../yup';
import firebase from 'firebase';

// Actions
import { registerCompany } from '../../redux/actions/authActions';

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
  const [uploadValue, setUploadValue] = useState(0);
  const { isAuth } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (isAuth) history.push('/');
  }, [isAuth]);

  const onSubmit = (data, e) => {


    const file = e.target.files[0];
    const storageRef = firebase.storage().ref(`/fotos/${file.name}`);
    const task = storageRef.put(file);

    task.on('state_changed', snapshot => {
      let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setUploadValue(percentage)
    }, err => { console.log(err) }, async () => {
      const urlLogo = await storageRef.getDownloadURL()
      data.avatar = urlLogo
    })

    dispatch(registerCompany(data));
    history.push('/login');
  };

  return (
    <RegisterFormWrapper onSubmit={e => handleSubmit(onSubmit(e))}>
      <LogoWrapper>
        <Link to='/'>
          <img src={HenryLogo} alt='Henry Logo' />
        </Link>
      </LogoWrapper>

      <Input
        type='text'
        name='companyName'
        label='Nombre de la empresa'
        required
        autoComplete='off'
        ref={register}
        onChange={() => trigger('companyName')}
        error={errors.companyName?.message}
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
      <progress value={uploadValue} max='100' ></progress>
      <Input
        type='file'
        name='avatar'
        label='Logo'
        autoComplete='off'
        ref={register}
        onChange={() => trigger('avatar')}
        error={errors.avatar?.message}
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
