import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { updateCompanySchema } from '../../yup';

// Components
import Input from '../Input';
import Loading from '../Loading';

// Actions
import { updateCompany } from '../../redux/actions/companiesActions';

// Styles
import { UpdateCompanyFormWrapper, UpdateButton } from './styles';
import Select from '../Select';


const UpdateCompanyForm = ({ modalRef, companyData }) => {

    const { register, handleSubmit, errors, trigger } = useForm({
        resolver: yupResolver(updateCompanySchema)
    });

    const dispatch = useDispatch();

    const onSubmit = (data) => {
        dispatch(updateCompany(companyData._id, data));
    };

    if (!companyData)
        return <Loading />;

    return (
        <UpdateCompanyFormWrapper onSubmit={handleSubmit(onSubmit)}>

            <Input
                type='text'
                name='name'
                label='Name'
                autoComplete='off'
                defaultValue={companyData.name}
                ref={register}
                onChange={() => trigger('name')}
                error={errors.name?.message}
            />

            <Input
                type='text'
                name='email'
                label='Email'
                autoComplete='off'
                defaultValue={companyData.email}
                ref={register}
                onChange={() => trigger('email')}
                error={errors.email?.message}
            />

            <Select
                name='verified'
                label='Verificada'
                ref={register}
                defaultValue={companyData.verified}
                onSelect={() => trigger("verified")}
                error={errors.verified?.message}
                options={[
                    {
                        text: "No",
                        value: false
                    },
                    {
                        text: "Yes",
                        value: true
                    }
                ]}
            />


            <UpdateButton>
                Editar Empresa
      </UpdateButton>
        </UpdateCompanyFormWrapper>
    );
};

export default UpdateCompanyForm;
