import styled from "styled-components";

export const LecturePageWrapper = styled.div`
  width: 90vw;
  margin: 2rem 5vw;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1rem;
  grid-auto-flow: row dense;
  overflow: hidden;
  box-sizing: content-box;
`;
