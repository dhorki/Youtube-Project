import styled from 'styled-components';

export const StyledViewVideoScreen = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }

  margin: 40px;
  margin-top: 15px;
`;
