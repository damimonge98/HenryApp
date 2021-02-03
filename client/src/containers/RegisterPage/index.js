import React from 'react';
import { RegisterPageWrapper, RegisterCard } from './styles';
import RegisterForm from '../../components/RegisterForm';

const RegisterPage = () => {
  return (
    <RegisterPageWrapper>
      <RegisterCard>
        <RegisterForm />
      </RegisterCard>
    </RegisterPageWrapper>
  );
};

export default RegisterPage;
