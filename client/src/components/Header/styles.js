import styled from "styled-components";

export const HeaderWrapper = styled.header`
  height: 70px;
  background: black;
  color: white;

  display: flex;
  align-items: center;
`;

export const HamburgerWrapper = styled.div`
  height: 70px;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  left: 0;

  &:hover {
    background: white;
    border: 2px solid black;
    cursor: pointer;

    & svg path {
      fill: black;
    }
  }
`;

export const LogoWrapper = styled.div`
  width: 100vw;

  display: flex;
  justify-content: center;

  & img {
    /* height: 60px; */
    width: 150px;
  }
`;

export const LogInWrapper = styled.div`
  height: 70px;
  position: absolute;
  right: 0;

  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    
    & ul {
      visibility: visible;
    }

  }

  & span {
    margin-left: 0.5rem;
  }
`;

export const AvatarWrapper = styled.figure`
  height: 40px;
  width: 40px;
  border: 2px solid #FFFF01;
  border-radius: 50%;
  background: #323232;
  margin: 0 1rem;
`;

export const MenuWrapper = styled.ul`
  visibility: hidden;

  
  width: 250px;
  position: absolute;
  top: 100%;
  right: 1rem;
  border-radius: 8px;

  filter: drop-shadow(2px 2px 25px rgba(32, 32, 32, 0.05));
  
  z-index: 200;

  &::before {
    content: '';
    position: absolute;
    bottom: 100%;
    right: 12px;
    width: 0;
    height: 0;
    border-bottom: 12px solid #fff;
    border-top: 12px solid transparent;
    border-right: 8px solid transparent;
    border-left: 8px solid transparent;
  }

  li:first-child {
    border-radius: 8px 8px 0 0;
  }

  li:last-child {
    border-radius: 0 0 8px 8px;
    background: rgba(220, 220, 220, 0.75);
    backdrop-filter: blur(250px);
    border-bottom: 0;
  }
`;

export const MenuItem = styled.li`
  height: 50px;
  background: #fafafa;
  padding: 0 1rem;
  border-bottom: 0.2px solid rgba(0,0,0,.20);

  display: flex;
  align-items: center;
  cursor: pointer;

  & a {
    color: black;
    font-weight: 500;
    text-decoration: none;
  }
  &:hover {
    background: #cacaca;
  }
`;