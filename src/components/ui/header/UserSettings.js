import React, { useContext } from 'react';
import { SliderButton } from './SliderButton';
import styled from 'styled-components';
import { EnvironmentContext } from '../../../contexts/EnvironmentContext';
import { themes } from '../../../constants/constants';
import { useTheme } from '../../../hooks/useTheme';

const StyledUserSettings = styled.div`
  display: flex;
  flex-direction: row;
  padding-right: 30px;
  justify-content: flex-end;

  > .username-tag {
    color: ${({ theme }) => theme.primary};
    font-size: 15px;
    font-weight: 400;
    margin: auto;
    margin-right: 10px;
  }

  > .user-badge {
    background-color: red;
    border: 1px solid ${({ theme }) => theme.inputBorder};
    border-radius: 50%;
    height: 30px;
    width: 30px;
    margin: auto;
    cursor: pointer;
  }
`;

export const UserSettings = () => {
  const { getTheme } = useTheme();
  const theme = getTheme();
  const { theme: curTheme, setTheme } = useContext(EnvironmentContext);

  const handleThemeChange = (checked) => {
    setTheme(checked ? themes.dark : themes.light);
  };

  const handleLogout = () => {};

  const user = { name: 'Victor Infante' };

  return (
    <StyledUserSettings theme={theme}>
      <SliderButton
        label="Dark Mode"
        initState={curTheme === themes.dark}
        callback={handleThemeChange}
      />
      <div className="username-tag">{user.name}</div>
      <img
        className="user-badge"
        onClick={handleLogout}
        alt={user.name}
        src={'https://cdn.pixabay.com/photo/2016/11/08/15/21/user-1808597_1280.png'}
      />
    </StyledUserSettings>
  );
};
