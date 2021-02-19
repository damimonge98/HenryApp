import React from 'react';
import { LecturePageWrapper } from './styles';
import Layout from '../Layout';
import VideoPlayer from '../../components/VideoPlayer';

const LecturePage = () => {
  return (
    <Layout>
      <LecturePageWrapper>
        <VideoPlayer />
      </LecturePageWrapper>
    </Layout>
  );
};

export default LecturePage;
