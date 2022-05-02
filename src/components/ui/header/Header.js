import React, { useContext } from 'react';
import styled from 'styled-components';
import { SearchInput } from './SearchInput';
import { UserSettings } from './UserSettings';
import { IoLogoYoutube } from 'react-icons/io5';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useTheme } from '../../../hooks/useTheme';
import { styles } from '../../../constants/constants';
import { EnvironmentContext } from '../../../contexts/EnvironmentContext';

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.barBackground};
  box-shadow: 0 2px 4px 0 ${({ theme }) => theme.inputBorder};
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;

  transition: background-color ${styles.props.transitionTime} ease;

  > button {
    color: ${({ theme }) => theme.primary};
    font-size: 15px;
    font-weight: normal;
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0;
    width: 2rem;
  }

  > .app-link {
    text-decoration: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: auto;
    margin-bottom: auto;

    > .app-icon {
      font-size: 20px;
      color: ${({ theme }) => theme.appIcon};
      display: flex;
      flex-direction: row;
      justify-content: center;
      padding: 0;
      margin: auto;
    }

    > h1 {
      color: ${({ theme }) => theme.primary};
      font-size: 18px;
      font-weight: bolder;
      margin: 0 5px;
    }
  }
`;

export const Header = () => {
  const { getTheme } = useTheme();
  const theme = getTheme();

  const { sidebarShow, setSidebarShow } = useContext(EnvironmentContext);

  return (
    <StyledHeader theme={theme}>
      <button
        onClick={() => {
          setSidebarShow(!sidebarShow);
        }}
      >
        {sidebarShow ? <BsFillArrowLeftSquareFill /> : <GiHamburgerMenu />}
      </button>
      <Link className="app-link" to="/">
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
