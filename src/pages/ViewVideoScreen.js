import React from 'react';
import { useParams } from 'react-router-dom';
import { RelatedVideoList } from '../components/ui/video_view/RelatedVideoList';
import { VideoView } from '../components/ui/video_view/VideoView';
import { StyledViewVideoScreen } from '../styles/pages/ViewVideoScreen';

export const ViewVideoScreen = () => {
  const { videoId } = useParams();
  return (
    <StyledViewVideoScreen>
      <VideoView id={videoId} />
      <RelatedVideoList relatedTo={videoId} />
    </StyledViewVideoScreen>
  );
};
