import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { StyledRelatedVideoList } from '../../../styles/components/ui/video_view/RelatedVideoList';
import { useFetch } from '../../../hooks/useFetch';
import { RelatedVideoCard } from './RelatedVideoCard';
import { LoadingAnimation } from '../loading/LoadingAnimation';
import { ErrorText } from '../error/ErrorText';
import { EnvironmentContext } from '../../../contexts/EnvironmentContext';

export const RelatedVideoList = ({ relatedTo }) => {
  const { environment } = useContext(EnvironmentContext);
  const { theme } = environment;

  const url =
    'https://www.googleapis.com/youtube/v3/search?' +
    `key=${process.env.REACT_APP_YOUTUBE_API_KEY}&` +
    'part=snippet&' +
    'type=video&' +
    'order=relevance&' +
    `relatedToVideoId=${relatedTo}&` +
    'maxResults=24';

  const { data, loading, error } = useFetch(url);
  // const { data, loading, error } = { data: [], loading: true, error: null };

  let filteredItems = [];

  if (!loading && !error) {
    filteredItems = data.items?.filter(
      (item) => item.id.kind.includes('youtube#video') && item.snippet
    );
  }

  return (
    <StyledRelatedVideoList theme={theme}>
      <h3>Related Videos</h3>
      {loading ? (
        <LoadingAnimation />
      ) : error ? (
        <ErrorText error={error} />
      ) : !filteredItems || filteredItems.length === 0 ? (
        'No Related videos.'
      ) : (
        filteredItems.map((video) => (
          <RelatedVideoCard key={video.id.videoId} video={video} />
        ))
      )}
    </StyledRelatedVideoList>
  );
};

RelatedVideoList.propTypes = {
  relatedTo: PropTypes.string.isRequired,
};
