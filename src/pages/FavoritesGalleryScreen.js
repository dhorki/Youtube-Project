import React, { useContext } from 'react';
import { VideoCard } from '../components/ui/gallery/VideoCard';
import { StyledGallery } from '../styles/pages/Gallery';
import { useFetch } from '../hooks/useFetch';
import { LoadingAnimation } from '../components/ui/loading/LoadingAnimation';
import { ErrorText } from '../components/ui/error/ErrorText';
import { EnvironmentContext } from '../contexts/EnvironmentContext';

export const FavoritesGalleryScreen = () => {
  const { environment } = useContext(EnvironmentContext);
  const { theme, user } = environment;

  const favoritesUrl =
    'https://www.googleapis.com/youtube/v3/videos?' +
    `key=${process.env.REACT_APP_YOUTUBE_API_KEY}&` +
    'part=id,snippet&' +
    'id=' +
    user?.favoritesList.join(',') +
    '&' +
    'maxResults=24';

  const { data, loading, error } = useFetch(favoritesUrl, false);

  let filteredItems = [];

  if (!loading && !error) {
    filteredItems = data.items?.filter((item) => item.kind.includes('youtube#video'));
  }

  const getNoResultsMessage = () => {
    const message = 'You have no favorites yet';
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
        filteredItems.map((video) => (
          <VideoCard key={video.id} video={video} fromFavorites={true} />
        ))
      )}
    </StyledGallery>
  );
};
