import styled from 'styled-components';
import { styles } from '../../../constants/constants';

export const StyledMainView = styled.div`
  background-color: ${({ theme }) => theme.background};
  position: fixed;
  padding-top: 5px;
  width: 100vw;
  height: calc(100vh - 45px);

  transition: background-color ${styles.props.transitionTime} ease;

  > .main-container {
    justify-content: center;
    align-items: center;
    margin-left: ${({ sidebarShow }) =>
      sidebarShow ? styles.props.sidebarWidth : '0px'};
    height: 100%;
    scroll-behavior: smooth;
    overflow: scroll;

    transition: margin-left ${styles.props.transitionTime} ease;
    transition: width ${styles.props.transitionTime * 2} ease;
  }
`;
