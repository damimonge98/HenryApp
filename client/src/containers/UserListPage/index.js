import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../../redux/actions/usersActions';

import Layout from '../Layout';
import Loading from '../../components/Loading';
import Table from '../../components/Table';
import Modal from '../../components/Modal';
import UpdateUserForm from '../../components/UpdateUserForm';
import { H1 } from './styles';

const UserListPage = () => {
  const { users, loading } = useSelector(state => state.user);
  const [selected, setSelected] = useState(null);
  const dispatch = useDispatch();
  const editModalRef = useRef();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const handleUpdateUser = (id) => {
    console.log(id);
    const [user] = users.filter(u => {
      if (u._id === id)
        return true;
      return false;
    });
    setSelected(user);
    editModalRef.current.openModal();
  };
  const handleDeleteUser = () => { };

  const columns = [
    {
      id: "1",
      text: "Full Name",
      name: "fullName"
    },
    {
      id: "2",
      text: "Email",
      name: "email"
    },
    {
      id: "3",
      text: "Role",
      name: "role"
    },
    {
      id: "4",
      text: "Admin",
      name: "isAdmin"
    },
    {
      id: "5",
      text: "Actions",
      name: "actions"
    }
  ];

  const actions = [
    {
      handleClick: (id) => handleUpdateUser(id),
      icon: "E"
    },
    {
      handleClick: (id) => handleDeleteUser(),
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

  if (loading)
    return <Loading />;

  return (
    <Layout>
      <Table columns={columns} rows={rows} actions={actions} />
      <Modal ref={editModalRef}>
        <H1>Edit User</H1>
        <UpdateUserForm modalRef={editModalRef} userData={selected} />
      </Modal>
    </Layout>
  );
};

export default UserListPage;
