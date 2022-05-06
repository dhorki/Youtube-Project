import React, { useContext } from 'react';
import { EnvironmentContext } from '../../contexts/EnvironmentContext';
import { useTheme } from '../../hooks/useTheme';
import { Gallery } from './gallery/Gallery';
import { StyledMainView } from '../../styles/components/ui/MainView';

export const MainView = ({ content }) => {
  const { getTheme } = useTheme();
  const theme = getTheme();

  const { sidebarShow } = useContext(EnvironmentContext);

  return (
    <StyledMainView theme={theme} sidebarShow={sidebarShow}>
      <div className="main-container">
        <Gallery />
      </div>
    </StyledMainView>
  );
};
