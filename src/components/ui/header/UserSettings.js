import React, { useContext } from 'react';
import { SliderButton } from './SliderButton';
import { EnvironmentContext } from '../../../contexts/EnvironmentContext';
import { environmentActions, styles } from '../../../constants/constants';
import { StyledUserSettings } from '../../../styles/components/ui/header/UserSettings';

export const UserSettings = () => {
  const { environment, dispatchEnv } = useContext(EnvironmentContext);
  const { theme } = environment;

  const handleThemeChange = (checked) => {
    const action = {
      type: environmentActions.setTheme,
      payload: {
        theme: checked ? styles.colors.dark : styles.colors.light,
      },
    };

    dispatchEnv(action);
  };

  const handleLogout = () => {};

  const user = { name: 'Victor Infante' };

  return (
    <StyledUserSettings theme={theme}>
      <SliderButton
        label="Dark Mode"
        initState={theme === styles.colors.dark}
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
