import React from 'react';

import { LoginPageWrapper, LoginCard } from './styles';
import LoginForm from '../../components/LoginForm';

const LoginPage = () => {
  return (
    <LoginPageWrapper>
      <LoginCard>
        <LoginForm />
      </LoginCard>
    </LoginPageWrapper>
  );
};

export default LoginPage;
