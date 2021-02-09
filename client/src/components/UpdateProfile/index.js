import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { profileSchema } from "../../yup";
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

import { autoLoginUser } from "../../redux/actions/authActions";
import { updateUser } from "../../redux/actions/usersActions";
import { object } from "yup/lib/locale";

const UpdateProfileForm = () => {
  const { user } = useSelector((state) => state.auth);
  const { register, handleSubmit, errors, trigger } = useForm({
    resolver: yupResolver(profileSchema),
  });

  const dispatch = useDispatch();

  const history = useHistory();

  useEffect(() => {
    dispatch(autoLoginUser());
  }, []);

  const onSubmit = (data) => {
    if (data.firstName.length === 0) {
      delete data.firstName;
    }
    if (data.lastName.length === 0) {
      delete data.lastName;
    }

    if (Object.keys(data).length !== 0) {
      dispatch(updateUser(user._id, data));
      dispatch(autoLoginUser());
      console.log(data);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>Update profile</h3>
      <Input
        type="text"
        name="firstName"
        label="First Name"
        ref={register}
        onChange={() => trigger("firstName")}
        error={errors.firstName?.message}
        defaultValue={user.firstName}
      />

      <Input
        type="text"
        name="lastName"
        label="Last Name"
        ref={register}
        onChange={() => trigger("lastName")}
        error={errors.lastName?.message}
        defaultValue={user.lastName}
      />
       <Input
        type="text"
        name="githubUsername"
        label="Git Hub"
        ref={register}
        onChange={() => trigger("githubUsername")}
        error={errors.githubUsername?.message}
        defaultValue={user.githubUsername}
      />
      <button>Save changes</button>
    </form>
  );
};

export default UpdateProfileForm;
