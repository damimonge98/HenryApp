import styled from 'styled-components';

export const H1 = styled.h1`
  font-size: 24px;
  font-weight: 500;
  text-align: center;
`;

export const ButtonCancel = styled.button`
  height: 30px;
  display: flex;
  width: 70%;
  align-items: center;
  justify-content: center;
  background: #4286F5;
  color: white;
  font-weight: 500;
  font-size: 18px;
  background: #000000;
  backdrop-filter: blur(250px);
  border: none;
  margin-top: 1rem;
  cursor: pointer;
  `;

export const ButtonConfirm = styled(ButtonCancel)`
  background-color: white;
  color: black;
  border: 2px solid black;
`;

export const ConfirmationWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;