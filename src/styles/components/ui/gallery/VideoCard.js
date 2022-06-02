import styled from 'styled-components';
import { styles } from '../../../../constants/constants';

export const StyledVideoCard = styled.div`
  > .favorite-container {
    position: relative;
    height: 0;
    width: 0;

    > button {
      width: 30px;
      position: absolute;
      left: 330px;
      top: 175px;
      background-color: transparent;
      border: 0px;
      color: ${styles.colors.light.white};
      font-size: 24px;
      font-weight: bold;
      cursor: pointer;
      z-index: 1;

      filter: drop-shadow(0px 0px 1px black);

      &:hover {
        font-size: 28px;
        filter: brightness(80%);
      }

      &.remove {
        color: ${styles.colors.light.appIcon};
      }
    }
  }

  > a {
    display: flex;
    flex-direction: column;
    width: 360px;

    margin: 10px;
    margin-bottom: 40px;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.primary};
    text-decoration: none;

    transition: background-color ${styles.props.transitionTime} ease;

    > img {
      height: 200px;
    }

    > .videocard-title {
      margin-top: 10px;
      color: ${({ theme }) => theme.primary};
      font-size: 18px;
      font-weight: bold;
    }

    > .videocard-channel-title {
      margin-top: 10px;
      color: ${({ theme }) => theme.secondary};
      font-size: 14px;
    }

    > .videocard-description {
      margin-top: 10px;
      color: ${({ theme }) => theme.secondary};
      font-size: 14px;
    }
  }
`;
