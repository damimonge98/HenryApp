import React from "react";

import {
  StyledLink,
  LectureCardWrapper,
  ImageWrapper,
  Title,
  Description,
  TopInfo,
  BottomInfo,
  Avatar,
  ByText,
  Date,
  LeftWrapper,
  LockIconStyled,
  BackDrop
} from "./styles";

const LectureCard = ({ lecture, blocked }) => {
  const {
    _id,
    description,
    imagen,
    modulo,
    title,
    video
  } = lecture;


  return (
    <StyledLink blocked={blocked} to={blocked ? "" : `/lectures/${_id}/module/${modulo}`} >
      <LectureCardWrapper blocked={blocked}>
        {
          blocked ?
            <>
              <BackDrop />
              <LockIconStyled />
            </>
            : null
        }
        <ImageWrapper>
          <img src={imagen} alt={title} />
        </ImageWrapper>
        <TopInfo>
          <Title>{title}</Title>
          <Description>
            {description}
          </Description>
        </TopInfo>
        <BottomInfo>
          <LeftWrapper>
            <Avatar>
              <img src="https://cdn.theorg.com/d3119e0e-8202-4034-85ce-d0356382515e_thumb.jpg" alt="Henry" />
            </Avatar>
            <ByText>
              By <strong>Henry</strong>
            </ByText>
          </LeftWrapper>
          <Date>
            10 Enero 2021
          </Date>
        </BottomInfo>
      </LectureCardWrapper>
    </StyledLink>
  );
};

export default LectureCard;
