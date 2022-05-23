import styled from 'styled-components';
import { styles } from '../../constants/constants';

export const StyledLoginModal = styled.div`
  background-color: ${({ theme }) => theme.barBackground};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 2px;
  padding: 20px;
  width: 250px;

  > .modal-close-row {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    > .modal-close {
      margin: 0px;
      cursor: pointer;

      &:hover {
        background-color: ${({ theme }) => theme.linkHoverBackground};
      }
    }
  }

  > .modal-title {
    text-align: center;
    margin-top: 0px;
    margin-bottom: 20px;
  }

  > form {
    > .modal-input {
      color: ${({ theme }) => theme.primary};
      background-color: transparent;
      border: 0px;
      border-bottom: 1px solid ${({ theme }) => theme.inputBorder};
      font-size: 16px;
      margin-bottom: 10px;
      height: 20px;
      width: 100%;

      transition: border-bottom ${({ theme }) => theme.transitionTime} ease;

      &:focus {
        border-bottom: 1px solid ${({ theme }) => theme.secondary};
        outline: none;
      }
    }

    > button {
      font-size: 16px;
      padding: 5px;
      color: ${({ theme }) => theme.primary};
      background-color: ${({ theme }) => theme.searchButtonBackground};
      width: 100%;
      border: 1px solid ${({ theme }) => theme.inputBorder};
      cursor: pointer;

      transition: filter ${styles.props.transitionTime} ease;

      &:hover {
        filter: brightness(
          ${({ theme }) => (theme === styles.colors.dark ? '125%' : '85%')}
        );
      }
    }
  }

  .social-networks {
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-top: 20px;
    padding-bottom: 20px;
    width: 100%;
  }

  .alert-error {
    background-color: red;
    border-radius: 5px;
    color: white;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    padding: 5px;
  }

  .google-btn {
    cursor: pointer;
    margin-top: 5px;
    width: 100%;
    height: 42px;
    background-color: ${({ theme }) => theme.googleBlue};
    border-radius: 2px;
    box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);

    transition: box-shadow ${styles.props.transitionTime} ease;

    .google-icon-wrapper {
      position: absolute;
      margin-top: 1px;
      margin-left: 1px;
      width: 40px;
      height: 40px;
      border-radius: 2px;
      background-color: ${({ theme }) => theme.white};
    }
    .google-icon {
      position: absolute;
      margin-top: 11px;
      margin-left: 11px;
      width: 18px;
      height: 18px;
    }
    .btn-text {
      float: right;
      margin: 11px 40px 0 0;
      color: ${({ theme }) => theme.white};
      font-size: 15px;
      letter-spacing: 0.2px;
    }
    &:hover {
      box-shadow: 0 0 6px ${({ theme }) => theme.googleBlue};
    }
    &:active {
      background: ${({ theme }) => theme.googleBlue};
    }
  }
`;
