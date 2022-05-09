import React from 'react';
import { useTheme } from '../../../hooks/useTheme';
import { timeSince } from '../../../helpers/formatters';
import { decodeHtml } from '../../../helpers/decodeHtml';
import { StyledRelatedVideoCard } from '../../../styles/components/ui/video_view/RelatedVideoCard';

export const RelatedVideoCard = ({ video }) => {
  const { getTheme } = useTheme();
  const theme = getTheme();

  const { id, snippet } = video;
  const { videoId } = id;
  const { title, channelTitle, thumbnails, publishTime } = snippet;
  const { url } = thumbnails.medium;
  const d = new Date(publishTime);

  const fixedTitle = title.length > 80 ? title.slice(0, 80) + '...' : title;

  return (
    <StyledRelatedVideoCard
      className="animate__animated animate__fadeIn"
      theme={theme}
      to={`/${videoId}`}
    >
      <img src={url} alt="video" />
      <div>
        <div className="videocard-title">{decodeHtml(fixedTitle)}</div>
        <div className="videocard-channel-title">
          {decodeHtml(channelTitle)}
          <br />
          {timeSince(d)} ago.
        </div>
      </div>
    </StyledRelatedVideoCard>
  );
};
