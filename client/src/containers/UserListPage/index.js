import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers, deleteUser } from '../../redux/actions/usersActions';

import Layout from '../Layout';
import Loading from '../../components/Loading';
import Table from '../../components/Table';
import Modal from '../../components/Modal';
import UpdateUserForm from '../../components/UpdateUserForm';
import InviteUsersCsvForm from '../../components/InviteUsersCsvForm';
import { H1, ButtonCancel, ButtonConfirm, ConfirmationWrapper, ButtonsRow, Button } from './styles';

const UserListPage = () => {
  const { users, loading } = useSelector(state => state.user);
  const [selected, setSelected] = useState(null);
  const dispatch = useDispatch();
  const editModalRef = useRef();
  const deleteModalRef = useRef();
  const inviteUsersCsvModalRef = useRef();

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
    console.log(id);
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

  if (loading)
    return <Loading />;

  console.log("SELECTED", selected);
  return (
    <Layout>
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
