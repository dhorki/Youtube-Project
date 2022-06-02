import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { RelatedVideoList } from '../components/ui/video_view/RelatedVideoList';
import { VideoView } from '../components/ui/video_view/VideoView';
import { EnvironmentContext } from '../contexts/EnvironmentContext';
import { useFetch } from '../hooks/useFetch';
import { StyledViewVideoScreen } from '../styles/pages/ViewVideoScreen';

export const ViewFavoritesVideoScreen = () => {
  const { environment } = useContext(EnvironmentContext);
  const { user } = environment;

  const { videoId } = useParams();

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

  return (
    <StyledViewVideoScreen>
      {!user ? (
        <Redirect to="/" />
      ) : (
        <>
          <VideoView id={videoId} />
          <RelatedVideoList
            title={'Favorites Videos'}
            videos={filteredItems}
            loading={loading}
            error={error}
          />
        </>
      )}
    </StyledViewVideoScreen>
  );
};
