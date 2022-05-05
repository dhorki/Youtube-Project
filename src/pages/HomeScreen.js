import React from 'react';
import { MainView } from '../components/ui/gallery/MainView';
import { Header } from '../components/ui/header/Header';
import { Sidebar } from '../components/ui/sidebar/Sidebar';
import { StyledContainer, StyledMain } from '../styles/pages/Common';

export const HomeScreen = () => {
  return (
    <StyledContainer>
      <Header />
      <StyledMain>
        <Sidebar />
        <MainView />
      </StyledMain>
    </StyledContainer>
  );
};
