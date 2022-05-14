import React, { useReducer } from 'react';
import { EnvironmentContext } from './contexts/EnvironmentContext';
import { AppRouter } from './routers/AppRouter';
import { styles } from './constants/constants';
import { appReducer } from './reducers/appReducer';

export const YoutubeApp = () => {
  const init = {
    theme: styles.colors.light,
    sidebarShow: false,
    q: '',
  };

  const [environment, dispatchEnv] = useReducer(appReducer, init);

  return (
    <EnvironmentContext.Provider value={{ environment, dispatchEnv }}>
      <AppRouter />
    </EnvironmentContext.Provider>
  );
};
