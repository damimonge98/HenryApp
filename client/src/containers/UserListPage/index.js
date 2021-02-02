import React from 'react';

import Layout from '../Layout';

const UserListPage = () => {
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
      handleClick: () => console.log("A"),
      icon: "A"
    },
    {
      handleClick: () => console.log("B"),
      icon: "B"
    },
    {
      handleClick: () => console.log("C"),
      icon: "C"
    },
    {
      handleClick: () => console.log("D"),
      icon: "D"
    },
  ];

  return (
    <Layout>

    </Layout>
  );
};

export default UserListPage;
