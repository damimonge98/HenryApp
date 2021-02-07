import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #323232;
`;

export const LectureCardWrapper = styled.div`
  height: 300px;
  width: 100%;
  margin: 1rem 1.5%;
  background: white;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 50%;

  & img {
    width: 100%;
    object-fit: cover;
  }
`;

export const Title = styled.h1`
  color: #323232;
  font-size: 18px;
  margin: 0.5rem 0;
`;

export const Description = styled.p`
  color: gray;
  line-height: 1.5rem;
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const TopInfo = styled.div`
  width: 100%;
  height: 35%;
  padding: 1rem;
  border-bottom: 0.1px solid #ececec;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const BottomInfo = styled.div`
  width: 100%;
  height: 15%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Avatar = styled.div`
  height: 28px;
  width: 28px;
  background: #b1b1b1;
  border-radius: 50%;
  margin-right: 5px;
  overflow: hidden;

  & img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const ByText = styled.span`
  text-transform: uppercase;
  font-size: 12px;
`;

export const Date = styled.span`
  font-size: 12px;
`;

export const LeftWrapper = styled.div`
  display:flex;
  align-items: center;
`;