import React, { useContext, useState } from 'react';
import { RiLoginBoxFill, RiLogoutBoxFill } from 'react-icons/ri';
import { SliderButton } from './SliderButton';
import { EnvironmentContext } from '../../../contexts/EnvironmentContext';
import { environmentActions, modalTypes, styles } from '../../../constants/constants';
import { StyledUserSettings } from '../../../styles/components/ui/header/UserSettings';
import { logout } from '../../../firebase';

export const UserSettings = () => {
  const { environment, dispatchEnv } = useContext(EnvironmentContext);
  const { theme, user } = environment;

  const [submenuShow, setsubmenuShow] = useState(false);

  const handleThemeChange = (checked) => {
    const action = {
      type: environmentActions.setTheme,
      payload: {
        theme: checked ? styles.colors.dark : styles.colors.light,
      },
    };

    dispatchEnv(action);
  };

  const handleLoginLogout = (toLogin) => {
    const action = {
      type: environmentActions.setModalShow,
      payload: {
        // if not toLogin, then logout, logout does not need modalShow
        modalShow: toLogin ? modalTypes.login : modalTypes.none,
      },
    };

    if (toLogin) {
      console.log('login');
    } else {
      const action = {
        type: environmentActions.setUser,
        payload: {
          user: null,
        },
      };

      logout();
      dispatchEnv(action);
    }

    setsubmenuShow(false);

    dispatchEnv(action);
  };

  const logged = false;

  return (
    <StyledUserSettings theme={theme} submenuShow={submenuShow}>
      <SliderButton
        label="Dark Mode"
        initState={theme === styles.colors.dark}
        callback={handleThemeChange}
      />
      {user && <div className="username-tag">{user.name}</div>}
      <img
        className="user-badge"
        onClick={() => setsubmenuShow(!submenuShow)}
        alt={user?.name}
        src={
          user?.photo
            ? user.photo
            : 'https://cdn.pixabay.com/photo/2016/11/08/15/21/user-1808597_1280.png'
        }
      />
      <div className="submenu-container">
        <div className="submenu-item" onClick={() => handleLoginLogout(null === user)}>
          <div className="submenu-icon">
            {logged ? <RiLogoutBoxFill /> : <RiLoginBoxFill />}
          </div>
          <div className="submenu-label">{null === user ? 'Login' : 'Logout'}</div>
        </div>
      </div>
    </StyledUserSettings>
  );
};
