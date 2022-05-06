import styled from 'styled-components';

export const StyledGallery = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 45px;

  .loading {
    width: 200px;
    height: 200px;
    overflow: hidden;

    img {
      position: relative;
      top: -200px;
      left: -300px;
      text-align: center;
      height: 600px;
      width: 800px;
      background-image: url($loadingUrl);
      background-position: center;
      mix-blend-mode: exclusion;
      filter: invert(100%);
    }
  }
`;
