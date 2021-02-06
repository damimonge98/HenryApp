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
  AvatarWrapper,
  UserLogo,
} from "./styles";
import henryLogo from "../../assets/images/henry.png";

import { autoLoginUser, registerUser } from "../../redux/actions/authActions";

const ProfileForm = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(autoLoginUser());
  }, []);
  const { register, handleSubmit, errors, trigger } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const history = useHistory();

  const onSubmit = (data) => {
    dispatch(registerUser(data));
    history.push("/");
  };

  return (
    <RegisterFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Layout>
        <div>
          <AvatarWrapper>
            {user.avatar && (
              <img
                src={user.avatar}
                alt={user.firstName + " " + user.lastName}
              />
            )}
          </AvatarWrapper>
          <h1>
            {user.firstName} {user.lastName}
          </h1>
          <h2> {user.email} </h2>
        </div>
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
        <div>
          <h3>Change Password</h3>
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
        </div>
      </Layout>
    </RegisterFormWrapper>
  );
};

export default ProfileForm;
