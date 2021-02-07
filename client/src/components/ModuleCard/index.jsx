import React from "react";
import { Link } from "react-router-dom";

import { ModuleCardWrapper, Title, Description, LectureList } from "./styles.js";

const ModuleCard = ({ module, available }) => {

  return (
    <ModuleCardWrapper>
      <Title>{module.title}</Title>
      <Description>{module.description}</Description>
      <LectureList>

      </LectureList>
    </ModuleCardWrapper>
  );
};

export default ModuleCard;
