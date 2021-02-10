import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Layout from '../Layout';
import Loading from '../../components/Loading';
import Modules from '../Modulos/index';
import InitialHome from '../../components/Home/Home';
import LectureCard from '../../components/LectureCard';
import ModuleCard from '../../components/ModuleCard';

import { getAllModules } from '../../redux/actions/modulesActions';
import { getAllLectures } from '../../redux/actions/lecturesActions';
import { ModulesSection } from './styles';

const HomePage = () => {
  const auth = useSelector(state => state.auth);
  const module = useSelector(state => state.module);
  const lecture = useSelector(state => state.lecture);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllModules());
    dispatch(getAllLectures());
  }, []);

  if (auth.loading || module.loading || lecture.loading) {
    return <Loading />;
  }

  return (
    <Layout>
      {
        auth.isAuth ?
          <ModulesSection>
            {module.modules.sort((a, b) => a.order - b.order).map(m => (
              <ModuleCard
                key={m._id}
                module={m}
                lectures={lecture.lectures.filter(l => l.modulo === m._id)}
                blocked={auth.user.currentModule < m.order}
              />
            ))}
            {/* <ModuleCard /> */}
            {/* <LectureCard lecture={{
              _id: "123S2XRT3",
              description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
              imagen: "https://waftengine.org/public/blog/1B5EE4D5D773F8A-RR.jpg",
              modulo: "",
              title: "React & Redux",
              video: []
            }} /> */}
          </ModulesSection>
          // <Modules ></Modules>
          :
          <InitialHome />
      }
    </Layout>
  );
};

export default HomePage;
