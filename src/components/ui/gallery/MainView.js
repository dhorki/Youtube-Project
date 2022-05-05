import React, { useContext } from 'react';
import { EnvironmentContext } from '../../../contexts/EnvironmentContext';
import { useTheme } from '../../../hooks/useTheme';
import { Gallery } from './Gallery';
import { StyledMainView } from '../../../styles/components/ui/gallery/MainView';

export const MainView = () => {
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
