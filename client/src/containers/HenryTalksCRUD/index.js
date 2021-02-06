import React from 'react';
import { useDispatch } from 'react-redux';

// Components
import Table from '../../components/Table';
import Layout from '../Layout';

const HenryTalksCRUD = () => {

  const { talk, talks, loading, error } = useSelector(state => state.talk);
  const [rows, setRows] = useState([]);
  const dispatch = useDispatch();

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
      handleClick: (id) => handleUpdateTalks(id),
      icon: "E"
    },
    {
      handleClick: (id) => handleDeleteTalk(id),
      icon: "D"
    }
  ];


  useEffect(() => {
    setRows(
      users
        .filter(u => {
          if (!roleFilter.value) {
            return true;
          }
          return u.role === roleFilter.value;
        })
        .filter(u => {
          if (adminFilter.value === "") {
            return true;
          }
          return u.isSuperAdmin === adminFilter.value;
        })
        .map(u => ({
          _id: u._id,
          fullName: `${u.firstName} ${u.lastName}`,
          email: u.email,
          role: u.role,
          isAdmin: u.isSuperAdmin
        }))
    );
  }, [roleFilter, adminFilter, users]);


  const handleUpdateTalks = (id) => {
    const [user] = users.filter(u => {
      if (u._id === id)
        return true;
      return false;
    });
    setSelected(user);
    editModalRef.current.openModal();
  };

  const handleDeleteTalk = (id) => {
    const [user] = users.filter(u => {
      if (u._id === id)
        return true;
      return false;
    });
    setSelected(user);
    deleteModalRef.current.openModal();
  };


  return (
    <Layout>
      <Table columns={columns} rows={rows} actions={actions} />
    </Layout>
  );
};

export default HenryTalksCRUD;
