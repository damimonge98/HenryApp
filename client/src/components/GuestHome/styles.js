import styled from "styled-components";
import { Link } from "react-router-dom";

export const GuestHomeWrapper = styled.div`
  width: 100%;
  overflow-y: hidden;
`;

export const Announcements = styled.div`
  height: 45px;
  width: 100%;
  background: #FFFF01;
  display: flex;
  justify-content: center;
  align-items: center;

  & span {
    font-weight: normal;
    font-size: 18px;
  }
`;

export const Container = styled.div`
  width: 100%;

`;

export const StudentSection = styled.div`
  padding: 0 10vw;
  width: 100%;
  height: calc(100vh - 115px);
  background: #FAFAFA;
  box-shadow: inset 4px 4px 60px rgba(50, 50, 50, 0.15);

  display: flex;
  justify-content: space-between;
`;

export const LeftSection = styled.div`
  width: 60%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  & h1 {
    margin: 1rem 0;
    font-weight: 600;
    font-size: 72px;
  }

  & h3 {
    margin: 1rem 0;
    font-weight: 500;
    font-size: 24px;
  }

  & p {
    width: 80%;
    margin: 1rem 0;
    font-weight: normal;
    font-size: 20px;
  }
`;

export const RightSection = styled.div`
  width: 40%;
  height: 100%;
  overflow: hidden;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  
`;

export const ImageWrapper = styled.div`
  height: 90%;
  position: relative;

  & img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  & svg {
    position: absolute;
    bottom: 0.5rem;
    right: 0.5rem;
  }
`;

export const Button = styled(Link)`
  height: 50px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #4286F5;
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 18px;
  background: #000000;
  backdrop-filter: blur(250px);
  border: none;
  margin-top: 1rem;
  cursor: pointer;

  &:hover {
    background: #171717;

  }
`;

export const EnterpriseSection = styled.div`
  padding: 0 10vw;
  height: calc(100vh - 115px);
  background: #FAFAFA;
  box-shadow: inset 4px 4px 60px rgba(50, 50, 50, 0.15);

  display: flex;
  justify-content: space-between;
`;

export const Toggles = styled.div`
  display: flex;

  & h6 {
    margin-right: 1rem;
    font-weight: 300;
    font-size: 18px;

    cursor: pointer;
  }
`;

export const Span = styled.span`
  font-weight: 500;
  border-bottom: ${ props => props.active ? "2px solid black" : "none"};

  &:hover {
    border-bottom: 2px solid #949494;
  }
`;

export const Section = styled.div`
  height: 100vh;
  width: 100%;
  background: #FFFF01;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & h4 {
    margin: 2rem;
    font-weight: 600;
    font-size: 64px;
  }

  & a {
    height: 70px;
    max-width: 400px;
  }
`;

export const H5 = styled.h5`
  margin-bottom: 0.5rem;
  font-weight: 500;
  font-size: 14px;
`;