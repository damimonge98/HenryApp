import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as LockIcon } from "../../assets/icons/lock.svg";

export const StyledLink = styled(Link)`
  height: 300px;
  width: 100%;
  min-width: 320px;
  max-width: 320px;
  margin: 0.5rem;
  text-decoration: none;
  color: #323232;
  cursor: ${(props) => props.blocked ? "initial" : "pointer"};
  `;

export const LectureCardWrapper = styled.div`
  height: 100%;
  width: 100%;
  background: white;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.15);
  position: relative;
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

export const LockIconStyled = styled(LockIcon)`
  height: 50px;
  width: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
`;