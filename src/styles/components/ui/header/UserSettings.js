import styled from 'styled-components';
import { styles } from '../../../../constants/constants';

export const StyledUserSettings = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 5px;
  padding-right: 30px;
  justify-content: flex-end;

  > .username-tag {
    color: ${({ theme }) => theme.primary};
    font-size: 15px;
    font-weight: 400;
    margin: auto;
    margin-right: 10px;
  }

  > .user-badge {
    background-color: red;
    border: 1px solid ${({ theme }) => theme.inputBorder};
    border-radius: 50%;
    height: 30px;
    width: 30px;
    margin: auto;
    cursor: pointer;
  }

  > .submenu-container {
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.barBackground};
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    width: ${styles.props.sidebarWidth};
    top: 50px;
    right: ${({ submenuShow }) =>
      submenuShow ? '40px' : '-' + styles.props.sidebarWidth};
    border: 1px solid ${({ theme }) => theme.inputBorder};
    box-shadow: 0px 0px 5px 0px ${({ theme }) => theme.inputBorder};
    z-index: 1;

    transition: right ${styles.props.transitionTime} ease;

    > .submenu-item {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: left;
      cursor: pointer;

      &:hover {
        background-color: ${({ theme }) => theme.linkHoverBackground};
      }

      transition: background-color ${styles.props.transitionTime} ease;

      > .submenu-icon {
        margin: 10px;
        font-size: 20px;
      }

      > .submenu-label {
        font-size: 16px;
        font-weight: bold;
        margin: 10px;
      }
    }
  }
`;
