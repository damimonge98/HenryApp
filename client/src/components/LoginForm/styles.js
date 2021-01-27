import styled from "styled-components";
import { ReactComponent as Github } from "../../assets/icons/github.svg";
import { ReactComponent as Google } from "../../assets/icons/google.svg";
import { ReactComponent as User } from "../../assets/icons/user.svg";

export const LoginFormWrapper = styled.form`
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
  margin-bottom: 2rem;

  & img {
    width: 150px;
  }
`;

export const Span = styled.span`
  font-weight: 500;
  font-size: 12px;
  margin: 0.5rem 0;
`;

export const LoginGithubButton = styled.a`
  height: 50px;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background: #31B256;
  color: white;
  font-weight: 500;
  font-size: 18px;
  backdrop-filter: blur(250px);
  cursor: pointer;
`;

export const LoginGoogleButton = styled.a`
  height: 50px;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #4286F5;
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 18px;
  backdrop-filter: blur(250px);
  cursor: pointer;
`;

export const LoginButton = styled.button`
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
  cursor: pointer;
`;

export const SpanLink = styled.span`
  font-weight: 500;
  font-size: 14px;
  color: #323232;
  margin-top: 1rem;
`;

export const GithubLogo = styled(Github)`
  margin-right: 1rem;
`;

export const GoogleLogo = styled(Google)`
  margin-right: 1rem;
`;

export const UserLogo = styled(User)`
  margin-right: 1rem;
`;