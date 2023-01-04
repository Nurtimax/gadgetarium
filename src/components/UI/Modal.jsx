import React from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { modalAction } from "../../redux/store/slice/modalReducer";

const Modal = ({ children }) => {
  const dispatch = useDispatch();

  return createPortal(
    <ModalBox onClick={() => dispatch(modalAction.updateActive())}>
      <ModalContent onClick={(e) => e.stopPropagation}>{children}</ModalContent>
    </ModalBox>,
    document.getElementById("portal")
  );
};

export default Modal;

// Style

const ModalBox = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  padding: 20px;
  border-radius: 12px;
  background-color: white;
`;
