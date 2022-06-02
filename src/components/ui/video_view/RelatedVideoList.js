import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { StyledRelatedVideoList } from '../../../styles/components/ui/video_view/RelatedVideoList';
import { RelatedVideoCard } from './RelatedVideoCard';
import { LoadingAnimation } from '../loading/LoadingAnimation';
import { ErrorText } from '../error/ErrorText';
import { EnvironmentContext } from '../../../contexts/EnvironmentContext';

export const RelatedVideoList = ({ title, videos, loading, error }) => {
  const { environment } = useContext(EnvironmentContext);
  const { theme } = environment;

  return (
    <StyledRelatedVideoList theme={theme}>
      <h3>{title}</h3>
      {loading ? (
        <LoadingAnimation />
      ) : error ? (
        <ErrorText error={error} />
      ) : !videos || videos.length === 0 ? (
        'No Related videos.'
      ) : (
        videos.map((video) => (
          <RelatedVideoCard
            key={video.id?.videoId ? video.id?.videoId : video.id}
            video={video}
          />
        ))
      )}
    </StyledRelatedVideoList>
  );
};

RelatedVideoList.propTypes = {
  title: PropTypes.string.isRequired,
  videos: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object,
};
