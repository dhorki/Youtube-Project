import styled from 'styled-components';
import { screenSizes, styles } from '../../../../constants/constants';

const videoArea = '60vw';
const videoAreaSmall = '100vw';

export const StyledVideoView = styled.div`
  max-width: ${videoArea};
  min-width: 480px;

  @media only screen and (max-width: ${screenSizes.mid}) {
    max-width: ${videoAreaSmall};
  }

  .embedded-video {
    width: 100%;
    min-width: ${screenSizes.xsmall};
    min-height: calc(480px * 9 / 16);
    height: calc(${videoArea} * 9 / 16);

    @media only screen and (max-width: ${screenSizes.mid}) {
      height: calc(${videoAreaSmall} * 9 / 16);
    }

    iframe {
      width: 100%;
      height: 100%;
      border: none;
    }
  }
  > .view-video-title {
    color: ${({ theme }) => theme.primary};
    font-size: 20px;
    font-weight: bolder;
    margin: 15px 0px;
    padding: 0;
    text-align: left;
    width: 100%;
    min-width: 480px;
  }

  > .view-video-stats {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: ${({ theme }) => theme.secondary};
    font-size: 13px;
    font-weight: bolder;
    margin: 0px;
    text-align: left;
    width: 100%;
    min-width: 480px;

    > p {
      margin: 0px;
    }
    > .view-video-stats-right {
      font-size: 15px;

      .live-icon {
        color: ${({ theme }) => theme.appIcon};
      }
    }
  }

  > .view-video-description-box {
    display: flex;
    flex-direction: column;

    > .view-video-description {
      color: ${({ theme }) => theme.secondary};
      overflow: hidden;
      min-height: 100px;
      height: 100%;
    }

    > .view-video-description.collapsed {
      height: 100px;
    }

    > .view-video-description-toggle {
      color: ${({ theme }) => theme.secondary};
      font-weight: bolder;
      background-color: transparent;
      border: none;
      justify-content: left;
      text-align: left;
      margin-top: 30px;
      width: 100px;
      cursor: pointer;
    }
  }

  hr {
    width: 100%;
    border: none;
    border-top: 1px solid ${({ theme }) => theme.inputBorder};
    margin: 15px 0px;
  }

  > .view-video-channel-favorite {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    > button {
      width: 180px;
      height: 40px;
      color: ${styles.colors.dark.primary};
      background-color: ${styles.colors.light.appIcon};
      font-weight: bolder;
      border-radius: 5px;
      border: none;
      cursor: pointer;

      &.remove {
        color: ${styles.colors.dark.primary};
        background-color: ${styles.colors.light.googleBlue};
      }
    }
  }
`;
