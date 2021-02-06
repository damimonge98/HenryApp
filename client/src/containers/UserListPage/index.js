import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers, deleteUser } from '../../redux/actions/usersActions';

import Layout from '../Layout';
import Loading from '../../components/Loading';
import Table from '../../components/Table';
import Modal from '../../components/Modal';
import UpdateUserForm from '../../components/UpdateUserForm';
import InviteUsersCsvForm from '../../components/InviteUsersCsvForm';
import DropDown from '../../components/DropDown';
import FilterBar from '../../components/FilterBar';
import { H1, ButtonCancel, ButtonConfirm, ConfirmationWrapper, ButtonsRow, Button } from './styles';

const UserListPage = () => {
  const { users, loading } = useSelector(state => state.user);
  const auth = useSelector(state => state.auth);
  const [selected, setSelected] = useState(null);
  const [adminFilter, setAdminFilter] = useState("all");
  const [roleFilter, setRoleFilter] = useState("all");
  const dispatch = useDispatch();
  const editModalRef = useRef();
  const deleteModalRef = useRef();
  const inviteUsersCsvModalRef = useRef();
  const history = useHistory();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const handleUpdateUser = (id) => {
    const [user] = users.filter(u => {
      if (u._id === id)
        return true;
      return false;
    });
    setSelected(user);
    editModalRef.current.openModal();
  };

  const handleDeleteUser = (id) => {
    const [user] = users.filter(u => {
      if (u._id === id)
        return true;
      return false;
    });
    setSelected(user);
    deleteModalRef.current.openModal();
  };

  const columns = [
    {
      id: "1",
      text: "Nombre y Apellido",
      name: "fullName"
    },
    {
      id: "2",
      text: "Email",
      name: "email"
    },
    {
      id: "3",
      text: "Rol",
      name: "role"
    },
    {
      id: "4",
      text: "Admin",
      name: "isAdmin"
    },
    {
      id: "5",
      text: "Acciones",
      name: "actions"
    }
  ];

  const actions = [
    {
      handleClick: (id) => handleUpdateUser(id),
      icon: "E"
    },
    {
      handleClick: (id) => handleDeleteUser(id),
      icon: "D"
    }
  ];

  const rows = users.map(u => ({
    _id: u._id,
    fullName: `${u.firstName} ${u.lastName}`,
    email: u.email,
    role: u.role,
    isAdmin: u.isSuperAdmin
  }));

  const filters = [
    {
      name: "Roles",
      selectedFilter: roleFilter,
      setFilter: setRoleFilter,
      options: [
        {
          name: "All Roles",
          value: "all"
        },
        {
          name: "Guess",
          value: "guess"
        },
        {
          name: "Students",
          value: "studnets"
        },
        {
          name: "Instructurs",
          value: "instructurs"
        },
      ]
    },
    {
      name: "Super Admin",
      selectedFilter: adminFilter,
      setFilter: setAdminFilter,
      options: [
        {
          name: "All Users",
          value: "all"
        },
        {
          name: "No",
          value: false
        },
        {
          name: "Yes",
          value: true
        },
      ]
    },
  ]

  if (auth.loading || loading)
    return <Loading />;

  if (!auth.isAuth) {
    history.push("/login");
    return null;
  }
  if (!auth.user.isSuperAdmin) {
    history.push("/");
    return null;
  }

  return (
    <Layout>
      <FilterBar filters={filters} />
      <ButtonsRow>
        <Button onClick={() => inviteUsersCsvModalRef.current.openModal()}>Invite users by csv</Button>
      </ButtonsRow>
      <Table columns={columns} rows={rows} actions={actions} />
      <Modal ref={editModalRef}>
        <H1>Edit User</H1>
        <UpdateUserForm modalRef={editModalRef} userData={selected} />
      </Modal>
      <Modal ref={deleteModalRef}>
        {
          selected ? (
            <ConfirmationWrapper>
              <H1>Deleting {selected.firstName} {selected.lastName}</H1>
              <span>Are you sure you want to delete this user?</span>
              <ButtonConfirm onClick={() => dispatch(deleteUser(selected._id))}>Confirm</ButtonConfirm>
              <ButtonCancel onClick={() => deleteModalRef.current.closeModal()}>Cancel</ButtonCancel>
            </ConfirmationWrapper>
          ) : null
        }
      </Modal>
      <Modal ref={inviteUsersCsvModalRef}>
        <H1>Inviting users by csv file</H1>
        <InviteUsersCsvForm />
      </Modal>
    </Layout>
  );
};

export default UserListPage;
