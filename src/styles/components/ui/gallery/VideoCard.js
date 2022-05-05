import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { styles } from '../../../../constants/constants';

export const StyledVideoCard = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 360px;

  margin: 10px;
  margin-bottom: 40px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.primary};
  text-decoration: none;

  transition: background-color ${styles.props.transitionTime} ease;

  > img {
    height: 200px;
  }

  > .videocard-title {
    margin-top: 10px;
    color: ${({ theme }) => theme.primary};
    font-size: 18px;
    font-weight: bold;
  }

  > .videocard-channel-title {
    margin-top: 10px;
    color: ${({ theme }) => theme.secondary};
    font-size: 14px;
  }

  > .videocard-description {
    margin-top: 10px;
    color: ${({ theme }) => theme.secondary};
    font-size: 14px;
  }
`;
