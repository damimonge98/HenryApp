import styled from "styled-components";

export const DropDownWrapper = styled.div`
  height: 100%;
  min-width: 150px;
  position: relative;
  background: #fcfcfc;
  border: 0.1px solid #B3B3B3;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover ul {
    visibility: visible;
  }
`;

export const Options = styled.ul`
  visibility: hidden;
  height: fit-content;
  width: 100%;
  position: absolute;
  top: 100%;
  left: 0;
`;

export const Option = styled.li`
  height: 60px;
  width: 100%;
  background: #FFFFFF;
  border: 0.1px solid #B8B8B8;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: #F1F1F1;
  }
`;