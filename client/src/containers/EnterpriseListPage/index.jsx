import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCompanies, deleteCompany } from '../../redux/actions/companiesActions';

import Layout from '../Layout';
import Loading from '../../components/Loading';
import Table from '../../components/Table';
import Modal from '../../components/Modal';
import Input from '../../components/Input';
import UpdateUserForm from '../../components/UpdateUserForm';
import InviteUsersCsvForm from '../../components/InviteUsersCsvForm';
import { H1, ButtonCancel, ButtonConfirm, ConfirmationWrapper, ButtonsRow, Button } from './styles';

const EnterpriseListPage = () => {
    const { companies, loadingCompanies } = useSelector(state => state.companies);
    const auth = useSelector(state => state.auth);
    const [selected, setSelected] = useState(null);
    const [rows, setRows] = useState([]);
    const dispatch = useDispatch();
    const history = useHistory();
    const editModalRef = useRef();
    const deleteModalRef = useRef();


    useEffect(() => {
        dispatch(getAllCompanies());
    }, []);

    useEffect(() => {
        setRows(
            companies
                .map(c => ({
                    _id: c._id,
                    name: c.name,
                    email: c.email,
                    empleos: c.empleos.length,
                    verified: c.verified
                }))
        );
    }, [companies]);

    const handleUpdateCompany = (id) => {
        const [company] = companies.filter(c => {
            if (c._id === id)
                return true;
            return false;
        });
        setSelected(company);
        editModalRef.current.openModal();
    };

    const handleDeleteCompany = (id) => {
        const [company] = companies.filter(c => {
            if (c._id === id)
                return true;
            return false;
        });
        setSelected(company);
        deleteModalRef.current.openModal();
    };

    const columns = [
        {
            id: "1",
            text: "Nombre",
            name: "name"
        },
        {
            id: "2",
            text: "Email",
            name: "email"
        },
        {
            id: "3",
            text: "Publicaciones",
            name: "empleos"
        },
        {
            id: "4",
            text: "Verificada",
            name: "verified"
        },
        {
            id: "5",
            text: "Acciones",
            name: "actions"
        }
    ]

    const actions = [
        {
            handleClick: (id) => handleUpdateCompany(id),
            icon: <i class="fas fa-pencil-alt"></i>
        },
        {
            handleClick: (id) => handleDeleteCompany(id),
            icon: <i class="fas fa-trash-alt"></i>
        }
    ];

    return (
        <Layout>
            <Table columns={columns} rows={rows} actions={actions} />
            <Modal ref={editModalRef}>
                <H1>Editar Empresa</H1>
                <form onSubmit={handleUpdateCompany}>
                    <input />
                </form>
            </Modal>
            <Modal ref={deleteModalRef}>
                {
                    selected ? (
                        <ConfirmationWrapper>
                            <H1>Borrando {selected.name}</H1>
                            <span>Estás seguro que deseas borrar esta empresa?</span>
                            <ButtonConfirm onClick={() => dispatch(deleteCompany(selected._id))}>Confirmar</ButtonConfirm>
                            <ButtonCancel onClick={() => deleteModalRef.current.closeModal()}>Cancelar</ButtonCancel>
                        </ConfirmationWrapper>
                    ) : null
                }
            </Modal>
        </Layout>
    )
}

export default EnterpriseListPage;