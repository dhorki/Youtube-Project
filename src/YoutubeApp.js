import React, { useState } from 'react';
import { EnvironmentContext } from './contexts/EnvironmentContext';
import { AppRouter } from './routers/AppRouter';
import { themes } from './constants/constants';

export const YoutubeApp = () => {
  const [theme, setTheme] = useState(themes.light);
  const [sidebarShow, setSidebarShow] = useState(false);
  return (
    <EnvironmentContext.Provider value={{ theme, setTheme, sidebarShow, setSidebarShow }}>
      <AppRouter />
    </EnvironmentContext.Provider>
  );
};
