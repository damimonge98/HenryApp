import React, { useState, forwardRef, useImperativeHandle } from "react";
import ReactDOM from "react-dom";

import { ModalWrapper, BackDrop, ModalBox, CloseButton } from "./styles";

const Modal = forwardRef(({ children }, ref) => {
  const [display, setDisplay] = useState(false);

  useImperativeHandle(ref, () => ({
    openModal: () => open(),
    closeModal: () => close(),
  }));

  const open = () => {
    setDisplay(true);
  };

  const close = () => {
    setDisplay(false);
  };

  if (!display)
    return null;

  return ReactDOM.createPortal(
    <ModalWrapper>
      <BackDrop onClick={close} />
      <ModalBox>
        <CloseButton onClick={close} />
        {children}
      </ModalBox>
    </ModalWrapper>, document.getElementById("modal-root"));
});

export default Modal;
