import styled from 'styled-components';
import { screenSizes, styles } from '../../../../constants/constants';

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.barBackground};
  box-shadow: 0 2px 4px 0 ${({ theme }) => theme.inputBorder};
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  position: fixed;
  top: 0;
  width: 100%;
  min-width: 560px;
  z-index: 1;

  transition: background-color ${styles.props.transitionTime} ease;

  > button {
    color: ${({ theme }) => theme.primary};
    font-size: 15px;
    font-weight: normal;
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0;
    width: 2rem;
  }

  > .app-link {
    text-decoration: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 5px;

    > .app-icon {
      font-size: 20px;
      color: ${({ theme }) => theme.appIcon};
      display: flex;
      flex-direction: row;
      justify-content: center;
      padding: 0;
    }

    > h1 {
      color: ${({ theme }) => theme.primary};
      font-size: 18px;
      font-weight: bolder;
      margin: 0 5px;

      @media only screen and (max-width: ${screenSizes.small}) {
        display: none;
      }
    }
  }
`;
