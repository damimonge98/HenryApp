import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllLectures, deleteLecture } from '../../redux/actions/lecturesActions';

import Layout from '../Layout';
import Loading from '../../components/Loading';
import Table from '../../components/Table';
import Modal from '../../components/Modal';
import UpdateLectureForm from '../../components/UpdateLectureForm';
import FilterBar from '../../components/FilterBar';
import AddVideoForm from '../../components/AddVideoForm';
import { H1, ButtonCancel, ButtonConfirm, ConfirmationWrapper } from './styles';

const LectureListPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { loadingLectures, lectures } = useSelector(state => state.lecture);
  const { loading, isAuth, user } = useSelector(state => state.auth);
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");
  // const [adminFilter, setAdminFilter] = useState({
  //   name: "All Users",
  //   value: ""
  // });
  // const [roleFilter, setRoleFilter] = useState({
  //   name: "All Roles",
  //   value: ""
  // });
  const [rows, setRows] = useState([]);
  const editModalRef = useRef();
  const deleteModalRef = useRef();
  const addVideoModalRef = useRef();

  useEffect(() => {
    dispatch(getAllLectures());
  }, []);

  useEffect(() => {
    setRows(
      lectures
        // .filter(u => {
        //   if (!roleFilter.value) {
        //     return true;
        //   }
        //   return u.role === roleFilter.value;
        // })
        // .filter(u => {
        //   if (adminFilter.value === "") {
        //     return true;
        //   }
        //   return u.isSuperAdmin === adminFilter.value;
        // })
        .filter(l => {
          if (search.length > 0) {
            if (l.title.includes(search) || l.description.includes(search))
              return true;
            return false;
          }
          return true;
        })
        .map(l => ({
          _id: l._id,
          title: l.title,
          description: l.description
        }))
    );
  }, [lectures, search]);

  const handleUpdateLecture = (id) => {
    const [selectedLecture] = lectures.filter(l => {
      if (l._id === id)
        return true;
      return false;
    });
    setSelected(selectedLecture);
    editModalRef.current.openModal();
  };

  const handleDeleteLecture = (id) => {
    const [selectedLecture] = lectures.filter(l => {
      if (l._id === id)
        return true;
      return false;
    });
    setSelected(selectedLecture);
    deleteModalRef.current.openModal();
  };

  const handleAddVideo = (id) => {
    const [selectedLecture] = lectures.filter(l => {
      if (l._id === id)
        return true;
      return false;
    });
    setSelected(selectedLecture);
    addVideoModalRef.current.openModal();
  };

  if (loading || loadingLectures)
    return <Loading />;

  if (!isAuth) {
    history.push("/login");
    return null;
  }

  if (user && !user.isSuperAdmin) {
    history.push("/");
    return null;
  }

  if (user && user.companyName) {
    history.push('/empleos');
    return null;
  }

  const columns = [
    {
      id: "1",
      text: "Title",
      name: "title"
    },
    {
      id: "2",
      text: "Description",
      name: "description"
    },
    {
      id: "3",
      text: "Acciones",
      name: "actions"
    }
  ];

  const actions = [
    {
      handleClick: (id) => handleUpdateLecture(id),
      icon: <i class="fas fa-pencil-alt"></i>
    },
    {
      handleClick: (id) => handleDeleteLecture(id),
      icon: <i class="fas fa-trash-alt"></i>
    },
    {
      handleClick: (id) => handleAddVideo(id),
      icon: <i class="fas fa-video"></i>
    }
  ];

  // const filters = [
  //   {
  //     name: "Roles",
  //     setFilter: setRoleFilter,
  //     selectedFilter: roleFilter,
  //     options: [
  //       {
  //         name: "All Roles",
  //         value: ""
  //       },
  //       {
  //         name: "Guess",
  //         value: "guest"
  //       },
  //       {
  //         name: "Student",
  //         value: "student"
  //       },
  //       {
  //         name: "Instructor",
  //         value: "instructor"
  //       },
  //     ]
  //   },
  //   {
  //     name: "Users",
  //     setFilter: setAdminFilter,
  //     selectedFilter: adminFilter,
  //     options: [
  //       {
  //         name: "All Users",
  //         value: ""
  //       },
  //       {
  //         name: "Super Admins",
  //         value: true
  //       },
  //       {
  //         name: "Regular Users",
  //         value: false
  //       },
  //     ]
  //   },
  // ];

  return (
    <Layout>
      <FilterBar filters={[]} search={search} setSearch={(s) => setSearch(s)} />
      {/* <ButtonsRow>
        <Button onClick={() => inviteUsersCsvModalRef.current.openModal()}>Invitar usuarios por .csv</Button>
      </ButtonsRow> */}
      <Table columns={columns} rows={rows} actions={actions} style={{ "grid-template-columns": "1fr 1fr 1fr" }} />
      <Modal ref={editModalRef}>
        <H1>Editar Lecture</H1>
        <UpdateLectureForm modalRef={editModalRef} lectureData={selected} />
      </Modal>
      <Modal ref={deleteModalRef}>
        {
          selected ? (
            <ConfirmationWrapper>
              <H1>Borrando {selected.title} clase</H1>
              <span>Estás seguro que deseas borrar esta clase?</span>
              <ButtonConfirm onClick={() => dispatch(deleteLecture(selected._id))}>Confirmar</ButtonConfirm>
              <ButtonCancel onClick={() => deleteModalRef.current.closeModal()}>Cancelar</ButtonCancel>
            </ConfirmationWrapper>
          ) : null
        }
      </Modal>
      <Modal ref={addVideoModalRef}>
        <H1>Agregar un video</H1>
        <AddVideoForm modalRef={addVideoModalRef} lectureData={selected} />
      </Modal>
    </Layout>
  );
};

export default LectureListPage;
