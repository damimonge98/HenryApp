import styled from "styled-components";

export const LecturePageWrapper = styled.div`
  width: 90vw;
  margin: 2rem 5vw;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit , minmax(320px, 1fr));
  grid-gap: 1rem;
`;
