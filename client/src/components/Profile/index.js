import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../yup";
import Layout from "../../containers/Layout";

import Input from "../Input";
import {
  RegisterFormWrapper,
  RegisterButton,
  SpanLink,
  LogoWrapper,
  UserLogo,
} from "./styles";
import henryLogo from "../../assets/images/henry.png";

import { registerUser } from "../../redux/actions/authActions";

const ProfileForm = () => {
  const { register, handleSubmit, errors, trigger } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (data) => {
    dispatch(registerUser(data));
    history.push("/login");
  };

  return (
    <RegisterFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Layout>
        <h1>
          {user.firstName} {user.lastName}
        </h1>
        <h2> {user.email} </h2>
      </Layout>

      <div>
        <h3>Update profile</h3>
        <Input
          type="text"
          name="firstName"
          label="First Name"
          required
          onChange={() => trigger("firstName")}
          error={errors.firstName?.message}
          placeholder={user.firstName}
        />

        <Input
          type="text"
          name="lastName"
          label="Last Name"
          required
          onChange={() => trigger("lastName")}
          error={errors.lastName?.message}
          placeholder={user.lastName}
        />
      </div>

      <Input
        type="password"
        name="password"
        label="Password"
        required
        autocomplete="off"
        ref={register}
        onChange={() => trigger(["password", "repassword"])}
        error={errors.password?.message}
      />

      <Input
        type="password"
        name="repassword"
        label="Confirm Password"
        required
        autocomplete="off"
        ref={register}
        onChange={() => trigger(["password", "repassword"])}
        error={errors.repassword?.message}
      />

      <RegisterButton>
        <UserLogo />
        Change Password
      </RegisterButton>
    </RegisterFormWrapper>
  );
};

export default ProfileForm;
