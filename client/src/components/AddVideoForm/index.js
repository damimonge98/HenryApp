import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { createVideoSchema } from "../../yup";

import Input from '../Input';
import Loading from '../Loading';
import Select from '../Select';
import { AddVideoFormWrapper, AddVideoButton } from './styles';
import axios from '../../configAxios';

const AddVideoForm = ({ modalRef, lectureData }) => {

  const { register, handleSubmit, errors, trigger } = useForm({
    resolver: yupResolver(createVideoSchema)
  });

  // TODO: necesito hacer un req para traer los datos del usuario ?
  // const { isAuth } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (data) => {
    // dispatch(updateLecture(lectureData._id, data));
    axios.post(`/videos/${lectureData._id}`, { ...data })
      .then(res => {
        // getLectures();
        modalRef.current.closeModal();
      });
  };

  if (!lectureData)
    return <Loading />;

  console;

  return (
    <AddVideoFormWrapper onSubmit={handleSubmit(onSubmit)}>

      <Input
        type="text"
        name="title"
        label="Title"
        required
        autoComplete="off"
        ref={register}
        onChange={() => trigger("title")}
        error={errors.title?.message}
      />

      <Input
        type="text"
        name="url"
        label="Video URL"
        required
        autoComplete="off"
        ref={register}
        onChange={() => trigger("url")}
        error={errors.url?.message}
      />

      <Input
        type="text"
        name="img"
        label="Image"
        autoComplete="off"
        ref={register}
        onChange={() => trigger("img")}
        error={errors.img?.message}
      />

      <Input
        type="text"
        name="profesor"
        label="Instructor"
        autoComplete="off"
        ref={register}
        onChange={() => trigger("profesor")}
        error={errors.profesor?.message}
      />

      <AddVideoButton>
        Add Video
      </AddVideoButton>
    </AddVideoFormWrapper>
  );
};

export default AddVideoForm;
