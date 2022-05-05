import React from 'react';
import { useTheme } from '../../../hooks/useTheme';
import { timeSince } from '../../../helpers/timeSince';
import { decodeHtml } from '../../../helpers/decodeHtml';
import { StyledVideoCard } from '../../../styles/components/ui/gallery/VideoCard';

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
