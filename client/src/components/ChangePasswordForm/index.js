import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { passwordSchema } from "../../yup";
import Layout from "../../containers/Layout";
import UpdateProfileForm from "../UpdateProfile";

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

const ChangePasswordForm = () => {
  const { user } = useSelector((state) => state.auth);
  const { register, handleSubmit, errors, trigger } = useForm({
    resolver: yupResolver(passwordSchema),
  });

  const dispatch = useDispatch();

  const history = useHistory();

  useEffect(() => {
    dispatch(autoLoginUser());
  }, []);

  const onSubmit = (data) => {
    if (data.password !== data.repassword) {
      return errors;
      console.log(errors);
      console.log(data);
    } else if (data.password === data.repassword) {
      dispatch(updateUser(user._id, data));
      dispatch(autoLoginUser());
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>Change Password</h3>
      <Input
        type="password"
        name="oldpassword"
        label="Old Password"
        autoComplete="off"
        ref={register}
        onChange={() => trigger(["oldpassword", "password", "repassword"])}
        error={errors.password?.message}
      />

      <Input
        type="password"
        name="password"
        label="New Password"
        autoComplete="off"
        ref={register}
        onChange={() => trigger(["oldpassword", "password", "repassword"])}
        error={errors.password?.message}
      />

      <Input
        type="password"
        name="repassword"
        label="Confirm New Password"
        autoComplete="off"
        ref={register}
        onChange={() => trigger(["oldpassword", "password", "repassword"])}
        error={errors.repassword?.message}
      />

      <button>Change Password</button>
    </form>
  );
};

export default ChangePasswordForm;
