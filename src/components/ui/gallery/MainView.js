import React, { useContext } from 'react';
import styled from 'styled-components';
import { styles } from '../../../constants/constants';
import { EnvironmentContext } from '../../../contexts/EnvironmentContext';
import { useTheme } from '../../../hooks/useTheme';
import { Gallery } from './Gallery';

const StyledMainView = styled.div`
  background-color: ${({ theme }) => theme.background};
  position: fixed;
  padding-top: 5px;

  // TODO: clean up if necessary
  /* display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center; */
  width: 100vw;
  height: calc(100vh - 45px) !important;

  transition: background-color ${styles.props.transitionTime} ease;

  > .main-container {
    /* display: flex; */
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;
    margin-left: ${({ sidebarShow }) =>
      sidebarShow ? styles.props.sidebarWidth : '0px'};
    /* width: calc(
      100vw - ${({ sidebarShow }) => (sidebarShow ? styles.props.sidebarWidth : '0px')}
    ); */
    height: 100%;
    scroll-behavior: smooth;
    overflow: scroll;

    transition: margin-left ${styles.props.transitionTime} ease;
    // TODO: check width duration with content
    transition: width ${styles.props.transitionTime * 2} ease;
  }
`;

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
