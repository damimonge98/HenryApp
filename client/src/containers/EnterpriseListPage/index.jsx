import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCompanies, deleteCompany } from '../../redux/actions/companiesActions';

import Layout from '../Layout';
import Loading from '../../components/Loading';
import Table from '../../components/Table';
import Modal from '../../components/Modal';
import UpdateUserForm from '../../components/UpdateUserForm';
import InviteUsersCsvForm from '../../components/InviteUsersCsvForm';
/* import { H1, ButtonCancel, ButtonConfirm, ConfirmationWrapper, ButtonsRow, Button } from './styles'; */

const EnterpriseListPage = () => {
    const { companies, loadingCompanies } = useSelector(state => state.companies);
    const auth = useSelector(state => state.auth);
    const [selected, setSelected] = useState(null);
    const [rows, setRows] = useState([]);
    const dispatch = useDispatch();
    const history = useHistory();

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
        </Layout>
    )
}

export default EnterpriseListPage;