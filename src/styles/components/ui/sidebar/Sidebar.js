import styled from 'styled-components';
import { styles } from '../../../../constants/constants';

export const StyledSidebar = styled.nav`
  background-color: ${({ theme }) => theme.barBackground};
  color: ${({ theme }) => theme.primary};
  top: 48px;
  left: ${({ toggle }) => (toggle ? '0px' : '-' + styles.props.sidebarWidth)};
  position: fixed;
  display: flex;
  flex-direction: column;
  z-index: 1;
  width: ${styles.props.sidebarWidth};
  height: 100vh;

  transition: background-color ${styles.props.transitionTime} ease;
  transition: left ${styles.props.transitionTime} ease;

  > .sidebar-link {
    text-decoration: none;
    color: ${({ theme }) => theme.primary};
    font-size: 15px;
    font-weight: bolder;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    width: 100%;
    min-width: 100px;
    height: 50px;

    &:hover {
      background-color: ${({ theme }) => theme.linkHoverBackground};
    }

    transition: background-color ${styles.props.transitionTime} ease;

    > .sidebar-link-icon {
      margin-left: 15px;
    }

    > span {
      margin-left: 10px;
      margin-right: 20px;
    }
  }

  > .sidebar-link-active {
    color: ${({ theme }) => theme.linkActive};
  }
`;
