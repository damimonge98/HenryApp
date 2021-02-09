import React, { useState } from 'react';
import { RegisterPageWrapper, RegisterCard } from './styles';
import RegisterForm from '../../components/RegisterForm';
import CompanyRegisterForm from '../../components/CompanyRegisterForm';
import { SpanLink } from '../../components/RegisterForm/styles';
import { Link } from 'react-router-dom';

const RegisterPage = () => {

  const [companyForm, setCompanyForm] = useState(false);

  if (!companyForm) {
    return (
      <RegisterPageWrapper>
        <RegisterCard>
          <RegisterForm />
          <SpanLink>Sos una empresa?
          <Link onClick={() => setCompanyForm(!companyForm)}> Registrate acá</Link>
          </SpanLink>
        </RegisterCard>
      </RegisterPageWrapper>
    );
  } else {
    return (
      <RegisterPageWrapper>
        <RegisterCard>
          <CompanyRegisterForm />
          <SpanLink>Sos un estudiante?
          <Link onClick={() => setCompanyForm(!companyForm)}> Registrate acá</Link>
          </SpanLink>
        </RegisterCard>
      </RegisterPageWrapper>
    );
  }
};

export default RegisterPage;
