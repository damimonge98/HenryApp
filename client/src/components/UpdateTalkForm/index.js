import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { updateTalkSchema } from '../../yup';

// Components
import Input from '../Input';
import Loading from '../Loading';

// Actions
import { updateTalk } from '../../redux/actions/talkActions';

// Styles
import { UpdateTalkFormWrapper, UpdateButton } from './styles';


const UpdateTalkForm = ({ modalRef, talkData }) => {

  const { register, handleSubmit, errors, trigger } = useForm({
    resolver: yupResolver(updateTalkSchema)
  });

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(updateTalk(talkData._id, data));
  };

  if (!talkData)
    return <Loading />;

  return (
    <UpdateTalkFormWrapper onSubmit={handleSubmit(onSubmit)}>

      <Input
        type='text'
        name='title'
        label='Título'
        autoComplete='off'
        defaultValue={talkData.title}
        ref={register}
        onChange={() => trigger('title')}
        error={errors.title?.message}
      />

      <Input
        type='text'
        name='description'
        label='Descripción'
        autoComplete='off'
        defaultValue={talkData.description}
        ref={register}
        onChange={() => trigger('description')}
        error={errors.description?.message}
      />

      <Input
        type='url'
        name='imagen'
        label='Imagen'
        autoComplete='off'
        defaultValue={talkData.imagen}
        ref={register}
        onChange={() => trigger('imagen')}
        error={errors.imagen?.message}
      />

      <Input
        type='url'
        name='url'
        label='URL'
        autoComplete='off'
        defaultValue={talkData.url}
        ref={register}
        onChange={() => trigger('url')}
        error={errors.url?.message}
      />

      <UpdateButton>
        Editar Henry Talk
      </UpdateButton>
    </UpdateTalkFormWrapper>
  );
};

export default UpdateTalkForm;
