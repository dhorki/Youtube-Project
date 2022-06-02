import React, { useContext } from 'react';
import { VideoCard } from '../components/ui/gallery/VideoCard';
import { StyledGallery } from '../styles/pages/Gallery';
import { useFetch } from '../hooks/useFetch';
import { useLocation } from 'react-router-dom';
import { LoadingAnimation } from '../components/ui/loading/LoadingAnimation';
import { ErrorText } from '../components/ui/error/ErrorText';
import { EnvironmentContext } from '../contexts/EnvironmentContext';

export const GalleryScreen = () => {
  const { environment } = useContext(EnvironmentContext);
  const { theme } = environment;

  const location = useLocation();

  const queryString = require('query-string');
  const { q = '' } = queryString.parse(location.search);

  const searchUrl =
    'https://www.googleapis.com/youtube/v3/search?' +
    `key=${process.env.REACT_APP_YOUTUBE_API_KEY}&` +
    'part=snippet&' +
    `q=${q}&` +
    'type=video&' +
    `order=${q.length === 0 ? 'date' : 'relevance'}&` +
    'regionCode=MX&' +
    'relevanceLanguage=es&' +
    'maxResults=24';

  const { data, loading, error } = useFetch(searchUrl, false);

  let filteredItems = [];

  if (!loading && !error) {
    filteredItems = data.items?.filter((item) => item.id.kind.includes('youtube#video'));
  }

  const getNoResultsMessage = () => {
    let message = '';
    if (q) {
      message = 'No results found for your search.';
    }

    return <p className="animate__animated animate__fadeIn">{message}</p>;
  };

  return (
    <StyledGallery theme={theme}>
      {loading ? (
        <LoadingAnimation />
      ) : error ? (
        <ErrorText error={error} />
      ) : !filteredItems || filteredItems.length === 0 ? (
        getNoResultsMessage()
      ) : (
        filteredItems.map((video) => <VideoCard key={video.id.videoId} video={video} />)
      )}
    </StyledGallery>
  );
};
