import styled from 'styled-components';
import { screenSizes } from '../../constants/constants';

export const StyledViewVideoScreen = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media only screen and (max-width: ${screenSizes.mid}) {
    flex-direction: column;
  }

  margin: 40px;
  margin-top: 15px;
`;
