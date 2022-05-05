import React from 'react';
import { Header } from '../components/ui/header/Header';
import { Sidebar } from '../components/ui/sidebar/Sidebar';
import { StyledContainer, StyledMain } from '../styles/pages/Common';

export const FavoritesScreen = () => {
  return (
    <StyledContainer>
      <Header />
      <StyledMain>
        <Sidebar />
        <h1>Favorites</h1>
      </StyledMain>
    </StyledContainer>
  );
};
