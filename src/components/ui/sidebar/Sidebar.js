import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { MdFavorite } from 'react-icons/md';
import { EnvironmentContext } from '../../../contexts/EnvironmentContext';
import { StyledSidebar } from '../../../styles/components/ui/sidebar/Sidebar';
import { resetSearch } from '../../../helpers/resetSearch';

export const Sidebar = () => {
  const { environment, dispatchEnv } = useContext(EnvironmentContext);
  const { theme, sidebarShow } = environment;

  return (
    <StyledSidebar theme={theme} toggle={sidebarShow}>
      <NavLink
        id="sidebar-home-link"
        className={(isActive) => `sidebar-link ${isActive ? 'sidebar-link-active' : ''}`}
        to="/"
        onClick={() => resetSearch(dispatchEnv)}
        exact
      >
        <AiFillHome className="sidebar-link-icon" />
        <span>Home</span>
      </NavLink>
      <NavLink
        id="sidebar-favorites-link"
        className={(isActive) => `sidebar-link ${isActive ? 'sidebar-link-active' : ''}`}
        to="/favorites"
        onClick={() => resetSearch(dispatchEnv)}
      >
        <MdFavorite className="sidebar-link-icon" />
        <span>Favorites</span>
      </NavLink>
    </StyledSidebar>
  );
};
