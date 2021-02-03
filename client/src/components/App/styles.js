import styled from 'styled-components';

export const AppWrapper = styled.div`
  background: #fcfcfc;
`;

export const CenterInPage = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const QuoteWrapper = styled.div`
  max-width: 80vw;
  font-size: 22px;
  color: #323232;
  display: flex;
  flex-direction: column;
`;

export const Quote = styled.span`
  font-size: 22px;
  font-style: italic;
  color: #323232;
  margin: 2rem 0 0.4rem 0;
`;

export const Author = styled.span`
  font-size: 22px;
  font-weight: 500;
  color: black;
  align-self: flex-end;
`;
