import React, { useState } from 'react';
import { EnvironmentContext } from './contexts/EnvironmentContext';
import { useForm } from './hooks/useForm';
import { AppRouter } from './routers/AppRouter';
import { themes } from './constants/constants';

export const YoutubeApp = () => {
  const [theme, setTheme] = useState(themes.light);
  const [sidebarShow, setSidebarShow] = useState(false);
  const [{ q }, handleSearchChange] = useForm({ q: '' });
  return (
    <EnvironmentContext.Provider
      value={{ theme, setTheme, sidebarShow, setSidebarShow, q, handleSearchChange }}
    >
      <AppRouter />
    </EnvironmentContext.Provider>
  );
};
