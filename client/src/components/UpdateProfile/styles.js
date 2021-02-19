import styled from "styled-components";
import { ReactComponent as User } from "../../assets/icons/user.svg";

export const RegisterFormWrapper = styled.form`
  height: 100%;
  padding: 2rem;
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
export const AvatarWrapper = styled.div`
  height: 100px;
  width: 100px;
  border: 2px solid #ffff01;
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

export const Button = styled.button`
  height: 40px;
  padding: 0 2rem;
  width: fit-content;
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

export const SpanLink = styled.span`
  font-weight: 500;
  font-size: 14px;
  color: #323232;
  margin-top: 0.4rem;
`;

export const UserLogo = styled(User)`
  margin-right: 1rem;
`;
