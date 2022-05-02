import React from 'react';
import { VideoCard } from './VideoCard';
import styled from 'styled-components';
// import { useFetch } from '../../../hooks/useFetch';

const StyledGallery = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  margin-top: 45px;
  margin-left: 20px;
`;

export const Gallery = () => {
  // const { data, loading, error } = useFetch('../../../mocks/youtube-videos-mock.json');
  const jsonData = require('../../../mocks/youtube-videos-mock.json');
  // console.log(data, loading, error);
  const { items } = jsonData;

  const filteredItems = items.filter((item) => item.id.kind.includes('youtube#video'));

  return (
    <StyledGallery>
      {filteredItems.map((video) => (
        <VideoCard key={video.id.videoId} video={video} />
      ))}
    </StyledGallery>
  );
};
