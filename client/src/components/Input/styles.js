import styled from "styled-components";

export const InputWrapper = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 1rem 0;
  font-weight: 300;
  font-size: 18px;

  & input {
    height: 40px;
    width: 100%;
    border: 1px solid #F5F5F5;
    background: #F5F5F5;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    font-size: 18px;
  }
`;

export const ErrorMessage = styled.span`
  font-size: 10px;
  color: #FF0000;
`;

export const RowLabel = styled.div`
  display: flex;
  justify-content: space-between;
`;