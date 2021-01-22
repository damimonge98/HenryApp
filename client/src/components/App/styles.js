import styled from 'styled-components';

export const AppWrapper = styled.div`
  background: red;
  color: white;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  & span {
    color: blue;
  }
`;
