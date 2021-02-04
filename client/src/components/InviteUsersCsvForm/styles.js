import styled from "styled-components";

export const InviteUsersCsvFormWrapper = styled.div``;

export const DropZoneWrapper = styled.div`
  margin: 1rem 0;
  border: none;
  outline: none;
`;

export const Button = styled.button`
  height: 50px;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #4286F5;
  color: white;
  font-weight: 500;
  font-size: 18px;
  background: #000000;
  backdrop-filter: blur(250px);
  border: none;
  margin: 1rem auto 0 auto;
  cursor: pointer;
`;

export const Span = styled.span`
  overflow: hidden;
  display: flex;
  flex-wrap: nowrap;
`;

export const P = styled.p`
  height: 100px;
  border: 1px dashed #b9b9b9;
  display: flex;
  justify-content: center;
  align-items:  center;
  outline: none;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border: 1px dashed black;
  }
`;