import styled from 'styled-components';
import { screenSizes } from '../../../../constants/constants';

export const StyledRelatedVideoList = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 390px;

  @media only screen and (max-width: ${screenSizes.mid}) {
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
