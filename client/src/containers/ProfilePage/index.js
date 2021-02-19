import React from 'react';
import { useSelector } from "react-redux";
import Layout from "../Layout";
import Loading from '../../components/Loading';
import UpdateProfileForm from "../../components/UpdateProfile";
import ChangePasswordForm from "../../components/ChangePasswordForm";

import { AvatarWrapper, ProfilePageWrapper, InfoCardWraper, H1, CardWrapper } from "./styles";

const ProfilePage = () => {
  const { user, loading } = useSelector((state) => state.auth);

  if (loading)
    return <Loading />;
  return (
    <Layout>
      <ProfilePageWrapper>
        <H1>Proflie</H1>
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
          <h4>You are {user.role === "instructor" ? "an" : "a"} {user.role[0].toUpperCase() + user.role.slice(1)} </h4>
          {
            user.role === "student" ?
              <h5>Your are in {user.currentModule === 0 ? "Prep Course" : "Module " + user.currentModule}</h5>
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
