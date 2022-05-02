import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { styles } from '../../../constants/constants';
import { useTheme } from '../../../hooks/useTheme';
import { AiFillHome } from 'react-icons/ai';
import { MdFavorite } from 'react-icons/md';
import { EnvironmentContext } from '../../../contexts/EnvironmentContext';

const StyledSidebar = styled.nav`
  background-color: ${({ theme }) => theme.barBackground};
  color: ${({ theme }) => theme.primary};
  top: 48px;
  left: ${({ toggle }) => (toggle ? '0px' : '-' + styles.props.sidebarWidth)};
  position: fixed;
  display: flex;
  flex-direction: column;
  z-index: 1;
  width: ${styles.props.sidebarWidth};
  height: 100vh;

  transition: background-color ${styles.props.transitionTime} ease;
  transition: left ${styles.props.transitionTime} ease;

  > .sidebar-link {
    text-decoration: none;
    color: ${({ theme }) => theme.primary};
    font-size: 15px;
    font-weight: bolder;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    width: 100%;
    min-width: 100px;
    height: 50px;

    &:hover {
      background-color: ${({ theme }) => theme.linkHoverBackground};
    }

    transition: background-color ${styles.props.transitionTime} ease;

    > .sidebar-link-icon {
      margin-left: 15px;
    }

    > span {
      margin-left: 10px;
      margin-right: 20px;
    }
  }

  > .sidebar-link-active {
    color: ${({ theme }) => theme.linkActive};
  }
`;

export const Sidebar = () => {
  const { getTheme } = useTheme();
  const theme = getTheme();

  const { sidebarShow } = useContext(EnvironmentContext);

  return (
    <StyledSidebar theme={theme} toggle={sidebarShow}>
      <NavLink
        className={(isActive) => `sidebar-link ${isActive ? 'sidebar-link-active' : ''}`}
        to="/"
      >
        <AiFillHome className="sidebar-link-icon" />
        <span>Home</span>
      </NavLink>
      <NavLink className="sidebar-link" to="/favorites">
        <MdFavorite className="sidebar-link-icon" />
        <span>Favorites</span>
      </NavLink>
    </StyledSidebar>
  );
};
