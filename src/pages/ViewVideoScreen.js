import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { RelatedVideoList } from '../components/ui/video_view/RelatedVideoList';
import { VideoView } from '../components/ui/video_view/VideoView';
import { EnvironmentContext } from '../contexts/EnvironmentContext';
import { useFetch } from '../hooks/useFetch';
import { StyledViewVideoScreen } from '../styles/pages/ViewVideoScreen';

export const ViewVideoScreen = () => {
  const { environment } = useContext(EnvironmentContext);
  const { user } = environment;

  const { videoId } = useParams();

  const url =
    'https://www.googleapis.com/youtube/v3/search?' +
    `key=${process.env.REACT_APP_YOUTUBE_API_KEY}&` +
    'part=snippet&' +
    'type=video&' +
    'order=relevance&' +
    `relatedToVideoId=${videoId}&` +
    'maxResults=24';

  const { data, loading, error } = useFetch(url);

  let filteredItems = [];

  if (!loading && !error) {
    filteredItems = data.items?.filter(
      (item) => item.id.kind.includes('youtube#video') && item.snippet
    );
  }

  return (
    <StyledViewVideoScreen>
      {!user && videoId === 'favorites' ? (
        <Redirect to="/" />
      ) : (
        <>
          <VideoView id={videoId} />
          <RelatedVideoList
            title={'Related Videos'}
            videos={filteredItems}
            loading={loading}
            error={error}
          />
        </>
      )}
    </StyledViewVideoScreen>
  );
};
