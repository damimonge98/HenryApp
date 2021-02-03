import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../../redux/actions/usersActions';

import Layout from '../Layout';
import Loading from '../../components/Loading';
import Table from '../../components/Table';
import Modal from '../../components/Modal';
import Select from '../../components/Select';

const UserListPage = () => {
  const { users, loading } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const editModalRef = useRef();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const handleUpdateUser = () => {
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
      handleClick: () => handleUpdateUser(),
      icon: "E"
    },
    {
      handleClick: () => handleDeleteUser(),
      icon: "D"
    }
  ];

  const rows = users.map(u => ({
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
        <h1>Edit User</h1>
        <Select
          name="role"
          label="Role"
          required
          // ref={register}
          onSelect={() => console.log("Selected")}
          // error={errors.password?.message}
          options={["guess", "student", "instructor"]}
        />
      </Modal>
    </Layout>
  );
};

export default UserListPage;
