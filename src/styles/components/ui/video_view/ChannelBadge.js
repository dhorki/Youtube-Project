import styled from 'styled-components';

export const StyledChannelBadge = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0px;
  padding: 0px;
  height: 100%;
  color: ${({ theme }) => theme.primary};

  > .badge {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    > img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      overflow: hidden;
      margin: 0 10px;
    }

    > div {
      display: flex;
      flex-direction: column;
      justify-content: left;
      align-items: left;

      > .title {
        margin: 0px;
        font-size: 15px;
        color: ${({ theme }) => theme.primary};
      }

      > .subscribers {
        margin: 5px 0;
        font-size: 13px;
        color: ${({ theme }) => theme.secondary};
      }
    }
  }
`;
