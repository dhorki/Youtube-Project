import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { RelatedVideoList } from '../components/ui/video_view/RelatedVideoList';
import { VideoView } from '../components/ui/video_view/VideoView';
import { EnvironmentContext } from '../contexts/EnvironmentContext';
import { StyledViewVideoScreen } from '../styles/pages/ViewVideoScreen';

export const ViewVideoScreen = () => {
  const { environment } = useContext(EnvironmentContext);
  const { user } = environment;

  const { videoId } = useParams();
  return (
    <StyledViewVideoScreen>
      {!user && videoId === 'favorites' ? (
        <Redirect to="/" />
      ) : (
        <>
          <VideoView id={videoId} />
          <RelatedVideoList relatedTo={videoId} />
        </>
      )}
    </StyledViewVideoScreen>
  );
};
