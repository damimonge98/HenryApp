import styled from "styled-components";

export const LoadingWrapper = styled.div`
  margin-top: 20px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  position: absolute;
  right: 1.5rem;
  bottom: 1.5rem;
  border: 3px solid transparent;
  border-right: 3px solid black;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
`;

