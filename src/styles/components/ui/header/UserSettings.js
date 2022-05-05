import styled from 'styled-components';

export const StyledUserSettings = styled.div`
  display: flex;
  flex-direction: row;
  padding-right: 30px;
  justify-content: flex-end;

  > .username-tag {
    color: ${({ theme }) => theme.primary};
    font-size: 15px;
    font-weight: 400;
    margin: auto;
    margin-right: 10px;
  }

  > .user-badge {
    background-color: red;
    border: 1px solid ${({ theme }) => theme.inputBorder};
    border-radius: 50%;
    height: 30px;
    width: 30px;
    margin: auto;
    cursor: pointer;
  }
`;
