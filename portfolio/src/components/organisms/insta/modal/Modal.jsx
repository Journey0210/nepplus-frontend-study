import { useState } from "react";
import styled from "styled-components";

const Modal = ({ onClose }) => {
  const handleClick = () => {
    onClose();
  };
  return (
    <>
      <Container onClick={handleClick}>
        <ModalBox></ModalBox>
      </Container>
    </>
  );
};
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.85);
  z-index: 2;
`;
const ModalBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 503px;
    max-width: 855px;
    min-width: 348px;
    min-height: 391px;
    max-height: 898px;
  background: white;
  border-radius: 15px;
`;
export default Modal;
