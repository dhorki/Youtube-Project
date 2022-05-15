import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { timeSince } from '../../../helpers/formatters';
import { decodeHtml } from '../../../helpers/decodeHtml';
import { StyledRelatedVideoCard } from '../../../styles/components/ui/video_view/RelatedVideoCard';
import { EnvironmentContext } from '../../../contexts/EnvironmentContext';

export const RelatedVideoCard = ({ video }) => {
  const { environment } = useContext(EnvironmentContext);
  const { theme } = environment;

  const { id, snippet } = video;
  const { videoId } = id;
  const { title, channelTitle, thumbnails, publishTime } = snippet;
  const { url } = thumbnails.medium;
  const d = new Date(publishTime);

  const upperCaseCharsCount = title.length - title.replaceAll(/[A-Z]/g, '').length;
  const limitLength = upperCaseCharsCount > 50 ? 50 : upperCaseCharsCount > 30 ? 60 : 70;

  const fixedTitle =
    title.length >= limitLength ? title.slice(0, limitLength) + '...' : title;

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

RelatedVideoCard.propTypes = {
  video: PropTypes.object.isRequired,
};
