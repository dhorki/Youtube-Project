import React from 'react';
import PropTypes from 'prop-types';
import { StyledChannelBadge } from '../../../styles/components/ui/video_view/ChannelBadge';
import { useFetch } from '../../../hooks/useFetch';
import { useTheme } from '../../../hooks/useTheme';
import { intToMagnitude } from '../../../helpers/formatters';

export const ChannelBadge = ({ id }) => {
  const { getTheme } = useTheme();
  const theme = getTheme();

  const url =
    'https://www.googleapis.com/youtube/v3/channels?' +
    `key=${process.env.REACT_APP_YOUTUBE_API_KEY}&` +
    'part=snippet,statistics&' +
    `id=${id}&` +
    'maxResults=24';

  const { data, loading, error } = useFetch(url);

  let image = '',
    title = '',
    subscriberCount = '';
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
          <img src={image} alt={title} />
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
