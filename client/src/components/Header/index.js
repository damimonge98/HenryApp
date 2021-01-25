import React from 'react';

import { ReactComponent as HamburgerIcon } from "../../assets/icons/hamburgerlogo.svg";
import { ReactComponent as ConsoleIcon } from "../../assets/icons/consolelogo.svg";
import henryLogo from "../../assets/images/henry.png";

import { AvatarWrapper, HamburgerWrapper, LogoWrapper, LogInWrapper, HeaderWrapper, MenuWrapper, MenuItem } from './styles';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderWrapper>
      <HamburgerWrapper>
        <HamburgerIcon />
      </HamburgerWrapper>

      <LogoWrapper>
        <img src={henryLogo} alt="Henry Logo" />
      </LogoWrapper>

      <LogInWrapper>
        <ConsoleIcon />
        <span>Alejo Gschwind</span>
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
