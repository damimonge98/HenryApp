import React from 'react';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

import { ReactComponent as HamburgerIcon } from "../../assets/icons/hamburgerlogo.svg";
import { ReactComponent as ConsoleIcon } from "../../assets/icons/consolelogo.svg";
import {
  AvatarWrapper,
  HamburgerWrapper,
  LogoWrapper,
  LogInWrapper,
  HeaderWrapper,
  MenuWrapper,
  MenuItem
} from './styles';

import henryLogo from "../../assets/images/henry.png";

const Header = () => {

  const { firstName, lastName } = useSelector(state => state.auth.user);

  return (
    <HeaderWrapper>
      <HamburgerWrapper>
        <HamburgerIcon />
      </HamburgerWrapper>

      <LogoWrapper>
        <Link to="/">
          <img src={henryLogo} alt="Henry Logo" />
        </Link>
      </LogoWrapper>

      <LogInWrapper>
        <ConsoleIcon />
        <span>{firstName} {lastName}</span>
        <AvatarWrapper>

        </AvatarWrapper>
        <MenuWrapper>
          <MenuItem>
            <Link to="/profile">Profile</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/course">Your course</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/payments">Payments</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/settings">Settings</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/logout">Logout</Link>
          </MenuItem>
        </MenuWrapper>
      </LogInWrapper>

    </HeaderWrapper>
  );
};

export default Header;
