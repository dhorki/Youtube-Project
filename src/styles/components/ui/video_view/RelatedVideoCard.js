import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { styles } from '../../../../constants/constants';

export const StyledRelatedVideoCard = styled(Link)`
  display: flex;
  flex-direction: row;
  width: 360px;

  margin-left: 5px;
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.primary};
  text-decoration: none;

  transition: background-color ${styles.props.transitionTime} ease;

  > img {
    width: 168px;
    height: 94px;
  }

  > div {
    display: flex;
    flex-direction: column;
    width: 226px;
    margin-left: 10px;

    > .videocard-title {
      color: ${({ theme }) => theme.primary};
      font-size: 14px;
      font-weight: bold;
    }

    > .videocard-channel-title {
      margin-top: 10px;
      color: ${({ theme }) => theme.secondary};
      font-size: 14px;
    }
  }
`;
