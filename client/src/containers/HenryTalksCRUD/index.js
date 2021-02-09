import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// Components
import Table from '../../components/Table';
import Layout from '../Layout';
import Loading from '../../components/Loading';
import Modal from '../../components/Modal';
import UpdateTalkForm from '../../components/UpdateTalkForm';

// Actions
import { getAllTalks, deleteTalk } from '../../redux/actions/talkActions';

// Styles
import { ButtonConfirm, ButtonCancel, ConfirmationWrapper, H1 } from '../UserListPage/styles';

const HenryTalksCRUD = () => {

  const { user, isAuth, loading } = useSelector(state => state.auth);
  const { talks, loadingTalks } = useSelector(state => state.talk);
  const [rows, setRows] = useState([]);
  const [selected, setSelected] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const editModalRef = useRef();
  const deleteModalRef = useRef();


  useEffect(() => {
    dispatch(getAllTalks());
  }, []);

  useEffect(() => {
    setRows(
      talks.map(t => ({
        _id: t._id,
        title: t.title,
        description: t.description,
        imagen: t.imagen,
        url: t.url
      }))
    );
  }, [talks]);


  if (loading || loadingTalks)
    return <Loading />;

  if (!isAuth) {
    history.push('/login');
    return null;
  }

  if (!user.isSuperAdmin) {
    history.push('/');
    return null;
  }


  const handleUpdateTalk = (id) => {
    const [talk] = talks.filter(t => {
      if (t._id === id)
        return true;
      return false;
    });
    setSelected(talk);
    editModalRef.current.openModal();
  };

  const handleDeleteTalk = (id) => {
    const [talk] = talks.filter(t => {
      if (t._id === id)
        return true;
      return false;
    });
    setSelected(talk);
    deleteModalRef.current.openModal();
  };


  const columns = [
    {
      id: "1",
      text: "Título",
      name: "title"
    },
    {
      id: "2",
      text: "Descripción",
      name: "description"
    },
    {
      id: "3",
      text: "Imagen",
      name: "imagen"
    },
    {
      id: "4",
      text: "URL",
      name: "url"
    },
    {
      id: "5",
      text: "Acciones",
      name: "actions"
    }
  ];

  const actions = [
    {
      handleClick: (id) => handleUpdateTalk(id),
      icon: "E"
    },
    {
      handleClick: (id) => handleDeleteTalk(id),
      icon: "D"
    }
  ];


  return (
    <Layout>
      <Table columns={columns} rows={rows} actions={actions} />

      <Modal ref={editModalRef}>
        <H1>Editar Henry Talk</H1>
        <UpdateTalkForm modalRef={editModalRef} talkData={selected} />
      </Modal>

      <Modal ref={deleteModalRef}>
        {
          selected ? (
            <ConfirmationWrapper>
              <H1>Borrando {selected.title}</H1>
              <span>Estás seguro que deseas borrar esta Henry Talk?</span>
              <ButtonConfirm onClick={() => dispatch(deleteTalk(selected._id))}>Confirmar</ButtonConfirm>
              <ButtonCancel onClick={() => deleteModalRef.current.closeModal()}>Cancelar</ButtonCancel>
            </ConfirmationWrapper>
          ) : null
        }
      </Modal>
    </Layout>
  );
};

export default HenryTalksCRUD;
