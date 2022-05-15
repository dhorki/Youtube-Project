import React, { useContext } from 'react';
import { SearchInput } from './SearchInput';
import { UserSettings } from './UserSettings';
import { IoLogoYoutube } from 'react-icons/io5';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { EnvironmentContext } from '../../../contexts/EnvironmentContext';
import { StyledHeader } from '../../../styles/components/ui/header/Header';
import { environmentActions } from '../../../constants/constants';
import { resetSearch } from '../../../helpers/resetSearch';

export const Header = () => {
  const { environment, dispatchEnv } = useContext(EnvironmentContext);
  const { theme, sidebarShow } = environment;

  const sidebarShowHandler = () => {
    const action = {
      type: environmentActions.setSidebarShow,
      payload: {
        sidebarShow: !sidebarShow,
      },
    };

    dispatchEnv(action);
  };

  return (
    <StyledHeader theme={theme}>
      <button id="sidebarToggler" onClick={sidebarShowHandler}>
        {sidebarShow ? <BsFillArrowLeftSquareFill /> : <GiHamburgerMenu />}
      </button>
      <Link className="app-link" to="/" onClick={() => resetSearch(dispatchEnv)}>
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
