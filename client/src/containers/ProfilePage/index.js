import React from 'react';
import { useSelector } from "react-redux";
import Layout from "../Layout";
import Loading from '../../components/Loading';
import UpdateProfileForm from "../../components/UpdateProfile";
import ChangePasswordForm from "../../components/ChangePasswordForm";

import { AvatarWrapper, ProfilePageWrapper, InfoCardWraper, H1, CardWrapper } from "./styles";

const ProfilePage = () => {
  const { user, loading } = useSelector((state) => state.auth);

  const roles = {
    instructor: 'instructor',
    student: 'estudiante',
    guest: 'invitado',
    company: 'empresa'
  };

  if (loading)
    return <Loading />;
  return (
    <Layout>
      <ProfilePageWrapper>
        <H1>Perfil</H1>
        <InfoCardWraper>
          <AvatarWrapper>
            {user.avatar && (
              <img src={user.avatar} alt={user.firstName ? user.firstName : user.companyName + " " + user.lastName && user.lastName} />
            )}
          </AvatarWrapper>
          <h1>
            {user.firstName ? user.firstName : user.companyName} {user.lastName && user.lastName}
          </h1>
          <h2>{user.email} </h2>
          <h4>Tu rol es {roles[user.role]}</h4>
          {
            user.role === "student" || user.role === "guest" ?
              <h5>Estás en el {user.currentModule === 0 ? "Prep Course" : "módulo " + user.currentModule}</h5>
              : null
          }
        </InfoCardWraper>
        <CardWrapper>
          <UpdateProfileForm />
          <CardWrapper>
            <ChangePasswordForm />
          </CardWrapper>
        </CardWrapper>
      </ProfilePageWrapper>
    </Layout>
  );
};

export default ProfilePage;
