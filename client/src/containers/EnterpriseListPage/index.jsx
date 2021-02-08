import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Layout from '../Layout';
import Loading from '../../components/Loading';
import Table from '../../components/Table';
import Modal from '../../components/Modal';
import UpdateUserForm from '../../components/UpdateUserForm';
import InviteUsersCsvForm from '../../components/InviteUsersCsvForm';
/* import { H1, ButtonCancel, ButtonConfirm, ConfirmationWrapper, ButtonsRow, Button } from './styles'; */

const EnterpriseListPage = () => {
    

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

    ]
    return (
        <Layout>
          {/*   <Table columns={columns} rows='0' actions='0' /> */}

        </Layout>
    )
}

export default EnterpriseListPage;