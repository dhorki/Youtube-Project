import styled from 'styled-components';

export const StyledModal = styled.div`
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.barBackground}66;
  position: fixed;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px;
  top: 0px;
  left: 0px;
  height: 100vh;
  width: 100vw;
  backdrop-filter: blur(5px);
  z-index: 20;
`;
