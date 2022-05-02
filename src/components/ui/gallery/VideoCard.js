import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../../hooks/useTheme';
import { styles } from '../../../constants/constants';
import { timeSince } from '../../../helpers/timeSince';
import { decodeHtml } from '../../../helpers/decodeHtml';
import { Link } from 'react-router-dom';

const StyledVideoCard = styled(Link)`
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
`;

export const VideoCard = ({ video }) => {
  const { getTheme } = useTheme();
  const theme = getTheme();

  const { id, snippet } = video;
  const { videoId } = id;
  const { title, channelTitle, description, thumbnails, publishTime } = snippet;
  const { url } = thumbnails.medium;
  const d = new Date(publishTime);

  return (
    <StyledVideoCard theme={theme} to={`/${videoId}`}>
      <img src={url} alt="video" />
      <div className="videocard-title">{decodeHtml(title)}</div>
      <div className="videocard-channel-title">
        {decodeHtml(channelTitle)} - {timeSince(d)} ago.
      </div>
      <div className="videocard-description">{decodeHtml(description)}</div>
    </StyledVideoCard>
  );
};
