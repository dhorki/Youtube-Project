import React, { useContext } from 'react';
import { SearchInput } from './SearchInput';
import { UserSettings } from './UserSettings';
import { IoLogoYoutube } from 'react-icons/io5';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useTheme } from '../../../hooks/useTheme';
import { EnvironmentContext } from '../../../contexts/EnvironmentContext';
import { StyledHeader } from '../../../styles/components/ui/header/Header';

export const Header = () => {
  const { getTheme } = useTheme();
  const theme = getTheme();

  const { sidebarShow, setSidebarShow, handleSearchChange } =
    useContext(EnvironmentContext);

  const resetSearch = () => {
    handleSearchChange({ target: { name: 'q', value: '' } });
  };

  return (
    <StyledHeader theme={theme}>
      <button
        onClick={() => {
          setSidebarShow(!sidebarShow);
        }}
      >
        {sidebarShow ? <BsFillArrowLeftSquareFill /> : <GiHamburgerMenu />}
      </button>
      <Link className="app-link" to="/" onClick={resetSearch}>
        <div className="app-icon">
          <IoLogoYoutube />
        </div>
        <h1>Llutuve</h1>
      </Link>
      <SearchInput />
      <UserSettings />
    </StyledHeader>
  );
};
