import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { StyledChannelBadge } from '../../../styles/components/ui/video_view/ChannelBadge';
import { useFetch } from '../../../hooks/useFetch';
import { intToMagnitude } from '../../../helpers/formatters';
import { EnvironmentContext } from '../../../contexts/EnvironmentContext';

export const ChannelBadge = ({ id }) => {
  const { environment } = useContext(EnvironmentContext);
  const { theme } = environment;

  const url =
    'https://www.googleapis.com/youtube/v3/channels?' +
    `key=${process.env.REACT_APP_YOUTUBE_API_KEY}&` +
    'part=snippet,statistics&' +
    `id=${id}&` +
    'maxResults=24';

  const { data, loading, error } = useFetch(url);

  let image = '',
    title = '#?',
    subscriberCount = 0;
  if (!loading && !error) {
    const item = data?.items[0];
    image = item.snippet.thumbnails.default.url;
    title = item.snippet.title;
    subscriberCount = item.statistics.subscriberCount;
  }

  return (
    <StyledChannelBadge theme={theme}>
      {loading ? null : (
        <div className="badge">
          {!error ? <img src={image} alt={title} /> : null}
          <div>
            <p className="title">{title}</p>
            <p className="subscribers">{intToMagnitude(subscriberCount)} subscribers</p>
          </div>
        </div>
      )}
    </StyledChannelBadge>
  );
};

ChannelBadge.propTypes = {
  id: PropTypes.string.isRequired,
};
