import React, { useContext } from 'react';
import { timeSince } from '../../../helpers/formatters';
import { decodeHtml } from '../../../helpers/decodeHtml';
import { StyledVideoCard } from '../../../styles/components/ui/gallery/VideoCard';
import { EnvironmentContext } from '../../../contexts/EnvironmentContext';
import PropTypes from 'prop-types';

export const VideoCard = ({ video }) => {
  const { environment } = useContext(EnvironmentContext);
  const { theme } = environment;

  const { id, snippet } = video;
  const { videoId } = id;
  const { title, channelTitle, description, thumbnails, publishTime } = snippet;
  const { url } = thumbnails.medium;
  const d = new Date(publishTime);

  return (
    <StyledVideoCard
      className="animate__animated animate__fadeIn"
      theme={theme}
      to={`/${videoId}`}
    >
      <img src={url} alt="video" />
      <div className="videocard-title">{decodeHtml(title)}</div>
      <div className="videocard-channel-title">
        {decodeHtml(channelTitle)} - {timeSince(d)} ago.
      </div>
      <div className="videocard-description">{decodeHtml(description)}</div>
    </StyledVideoCard>
  );
};

VideoCard.propTypes = {
  video: PropTypes.object.isRequired,
};
