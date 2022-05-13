import styled from 'styled-components';

export const StyledRelatedVideoList = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 390px;

  @media only screen and (max-width: 1200px) {
    width: 100%;
    flex-direction: row;
    align-items: top;
  }

  > h3 {
    color: ${({ theme }) => theme.primary};
    width: 100%;
    text-align: center;
  }
`;
