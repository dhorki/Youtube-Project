import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../../hooks/useTheme';
import { AiFillHome } from 'react-icons/ai';
import { MdFavorite } from 'react-icons/md';
import { EnvironmentContext } from '../../../contexts/EnvironmentContext';
import { StyledSidebar } from '../../../styles/components/ui/sidebar/Sidebar';

export const Sidebar = () => {
  const { getTheme } = useTheme();
  const theme = getTheme();

  const { sidebarShow, handleSearchChange } = useContext(EnvironmentContext);

  const resetSearch = () => {
    handleSearchChange({ target: { name: 'q', value: '' } });
  };

  return (
    <StyledSidebar theme={theme} toggle={sidebarShow}>
      <NavLink
        className={(isActive) => `sidebar-link ${isActive ? 'sidebar-link-active' : ''}`}
        to="/"
        onClick={resetSearch}
        exact
      >
        <AiFillHome className="sidebar-link-icon" />
        <span>Home</span>
      </NavLink>
      <NavLink
        className={(isActive) => `sidebar-link ${isActive ? 'sidebar-link-active' : ''}`}
        to="/favorites"
        onClick={resetSearch}
      >
        <MdFavorite className="sidebar-link-icon" />
        <span>Favorites</span>
      </NavLink>
    </StyledSidebar>
  );
};
