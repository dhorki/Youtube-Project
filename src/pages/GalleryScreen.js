import React, { useContext } from 'react';
import { VideoCard } from '../components/ui/gallery/VideoCard';
import { StyledGallery } from '../styles/pages/Gallery';
import { useFetch } from '../hooks/useFetch';
import { useLocation } from 'react-router-dom';
import { mainViewTypes } from '../constants/constants';
import { LoadingAnimation } from '../components/ui/loading/LoadingAnimation';
import { ErrorText } from '../components/ui/error/ErrorText';
import { EnvironmentContext } from '../contexts/EnvironmentContext';

export const GalleryScreen = () => {
  const { environment } = useContext(EnvironmentContext);
  const { theme } = environment;

  const location = useLocation();

  const galleryType =
    location.pathname === '/' ? mainViewTypes.searchGallery : mainViewTypes.videoGallery;
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

  const favoritesUrl =
    'https://www.googleapis.com/youtube/v3/videos?' +
    `key=${process.env.REACT_APP_YOUTUBE_API_KEY}&` +
    'part=id,snippet&' +
    'id=id1,id2,id3&' +
    'maxResults=24';

  let url = '';
  if (galleryType === mainViewTypes.searchGallery) {
    url = searchUrl;
  } else {
    url = favoritesUrl;
  }

  const { data, loading, error } = useFetch(url, false);
  // const { data, loading, error } = { data: [], loading: true, error: null };

  let filteredItems = [];

  if (!loading && !error) {
    filteredItems = data.items?.filter((item) => item.id.kind.includes('youtube#video'));
  }

  const getNoResultsMessage = () => {
    let message = '';
    if (galleryType === mainViewTypes.searchGallery) {
      q && (message = 'No results found for your search.');
    } else {
      message = 'You have no favorites yet';
    }

    return message ? (
      <p className="animate__animated animate__fadeIn">{message}</p>
    ) : null;
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
