import styled from "styled-components";

export const ProfilePageWrapper = styled.div`
  margin: 2rem 10vw;
`;

export const InfoCardWraper = styled.div`
  width: 100%;
  padding: 2rem 0;
  background: #FFFFFF;
  color: #323232;
  box-shadow: 2px 2px 20px rgba(50, 50, 50, 0.2);
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;

  & h1 {
    margin: 1rem 0;
    font-weight: 500;
    font-size: 36px;
  }
  
  & h2 {
    margin-bottom: 1rem;
    color: #5C5C5C;
    font-weight: 500;
    font-size: 18px;
  }
  
  & h5 {
    margin-top: 1rem;
    font-weight: 500;
    font-size: 18px;
  }
`;

export const CardWrapper = styled.div`
  width: 100%;
  margin: 2rem 0;
  padding: 2rem 4rem;
  background: #FFFFFF;
  color: #323232;
  box-shadow: 2px 2px 20px rgba(50, 50, 50, 0.2);
  border-radius: 8px;
`;

export const H1 = styled.h1`
  margin: 0.5rem 0;
  font-weight: 500;
  font-size: 28px;
`;

export const AvatarWrapper = styled.div`
  height: 100px;
  width: 100px;
  margin: 1rem 0;
  border: 4px solid #ffff01;
  border-radius: 50%;
  background: #323232;
  margin: 0 1rem;

  & img {
    overflow: hidden;
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const RegisterButton = styled.button`
  height: 50px;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #4286f5;
  color: white;
  font-weight: 500;
  font-size: 18px;
  background: #000000;
  backdrop-filter: blur(250px);
  border: none;
  margin-top: 1rem;
  cursor: pointer;
`;



