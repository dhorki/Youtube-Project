import React from 'react';
import { VideoCard } from './VideoCard';
import { StyledGallery } from '../../../styles/components/ui/gallery/Gallery';
import { useFetch } from '../../../hooks/useFetch';
import { useLocation } from 'react-router-dom';
import { mainViewTypes } from '../../../constants/constants';

export const Gallery = () => {
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
    'order=rating&' +
    'maxResults=24';

  const favoritesUrl =
    'https://www.googleapis.com/youtube/v3/videos?' +
    `key=${process.env.REACT_APP_YOUTUBE_API_KEY}&` +
    'part=id,snippet,player&' +
    'id=id1,id2,id3&' +
    'maxResults=24';

  let url = '';
  if (galleryType === mainViewTypes.searchGallery) {
    url = searchUrl;
  } else {
    url = favoritesUrl;
  }

  const { data, loading, error } = useFetch(url);
  // const { data, loading, error } = { data: [], loading: true, error: null };

  let filteredItems = [];

  if (!loading && !error) {
    filteredItems = data.items?.filter((item) => item.id.kind.includes('youtube#video'));
  }

  const getNoResultsMessage = () => {
    if (galleryType === mainViewTypes.searchGallery) {
      return q ? <p>No results found for your search.</p> : null;
    } else {
      return <p>You have no favorites yet.</p>;
    }
  };

  return (
    <StyledGallery>
      {loading ? (
        <div className="loading">
          <img
            src="https://i.pinimg.com/originals/d4/2b/b2/d42bb2f00e1042c990b25f90ada9b0ab.gif"
            alt="loading"
          />
        </div>
      ) : error ? (
        <p>Error: {error?.message}</p>
      ) : !filteredItems || filteredItems.length === 0 ? (
        getNoResultsMessage()
      ) : (
        filteredItems.map((video) => <VideoCard key={video.id.videoId} video={video} />)
      )}
    </StyledGallery>
  );
};
