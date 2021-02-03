import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  background: rgba(0,0,0, 0.15);
`;

export const ModalBox = styled.div`
  position: relative;
  min-height: 40%;
  width: 40%;
  overflow-y: auto;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0, 0.25);
  z-index: 1001;
  padding: 2rem;
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  height: 30px;
  width: 30px;
  border-radius: 3px;
  background: black;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`;