import styled from "styled-components";

export const LoadingWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LoadingCircle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  /* position: absolute; */
  /* right: 50%;
  bottom: 50%;
  transform: translate(-50%, -50%); */
  border: 3px solid transparent;
  border-right: 3px solid black;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
`;

