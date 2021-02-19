import styled from "styled-components";

export const JobsPageWrapper = styled.div`
  margin: 2rem 10vw;
`;

export const H1 = styled.h1`
  margin: 1rem 0;
  font-weight: 500;
  font-size: 28px;
  color: #323232;
`;

export const Row = styled.div`
  width: 100%;
  margin: 1rem 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Button = styled.div`
  height: 40px;
  padding: 0 2em;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #4286f5;
  color: white;
  font-weight: 500;
  font-size: 18px;
  background: #000000;
  backdrop-filter: blur(250px);
  border: none;
  margin-top: 1rem;
  cursor: pointer;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1rem;
  grid-auto-flow: row dense;
  overflow: hidden;
  box-sizing: content-box;
`;