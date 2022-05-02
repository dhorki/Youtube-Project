import React from 'react';
import styled from 'styled-components';
import { MainView } from './ui/gallery/MainView';
import { Header } from './ui/header/Header';
import { Sidebar } from './ui/sidebar/Sidebar';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledMain = styled.main`
  flex: 1;
  display: flex;
  flex-direction: row;
  margin-top: 45px;
`;

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
