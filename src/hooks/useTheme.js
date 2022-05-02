import { useContext } from 'react';
import { styles, themes } from '../constants/constants';
import { EnvironmentContext } from '../contexts/EnvironmentContext';

export const useTheme = () => {
  const { theme } = useContext(EnvironmentContext);
  const getTheme = () => {
    return theme === themes.light ? styles.colors.light : styles.colors.dark;
  };
  return { getTheme };
};