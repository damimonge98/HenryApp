import styled from "styled-components";
import { ReactComponent as User } from "../../assets/icons/user.svg";

export const RegisterFormWrapper = styled.form`
  height: 100%;
  padding: 2rem 2rem 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  background: black;
  width: 250px;
  height: 50px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;

  & img {
    width: 150px;
  }
`;

export const RegisterButton = styled.button`
  height: 50px;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #4286F5;
  color: white;
  font-weight: 500;
  font-size: 18px;
  background: #000000;
  backdrop-filter: blur(250px);
  border: none;
  margin-top: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
`;

export const SpanLink = styled.span`
  display: flex;
  justify-content: center;
  font-weight: 500;
  font-size: 14px;
  color: #323232;
`;

export const UserLogo = styled(User)`
  margin-right: 1rem;
`;
