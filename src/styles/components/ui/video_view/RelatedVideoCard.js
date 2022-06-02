import styled from 'styled-components';
import { styles } from '../../../../constants/constants';

export const StyledRelatedVideoCard = styled.div`
  > .favorite-container {
    position: relative;
    height: 0;
    width: 0;

    > button {
      width: 30px;
      position: absolute;
      left: 135px;
      top: 65px;
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
    flex-direction: row;
    width: 360px;

    margin-left: 5px;
    margin-bottom: 10px;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.primary};
    text-decoration: none;

    transition: background-color ${styles.props.transitionTime} ease;

    &.current {
      background-color: ${({ theme }) => theme.linkHoverBackground};
    }

    > img {
      width: 168px;
      height: 94px;
    }

    > div {
      display: flex;
      flex-direction: column;
      width: 226px;
      margin-left: 10px;

      > .videocard-title {
        color: ${({ theme }) => theme.primary};
        font-size: 14px;
        font-weight: bold;
      }

      > .videocard-channel-title {
        margin-top: 10px;
        color: ${({ theme }) => theme.secondary};
        font-size: 14px;
      }
    }
  }
`;
