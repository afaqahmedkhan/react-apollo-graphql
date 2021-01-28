import React from "react";
import Button from "./Button";
import styled from "styled-components";

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #e7f1f7;
`;

const StyledContent = styled.div`
  height: 200px;
  width: 400px;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -100px;
  margin-left: -200px;
`;

const StyledText = styled.p`
  padding: 18.5px 14px;
  border-radius: 1px;
  width: 200px;
  margin-right: 10px;
  display: inline-block;
  border-style: solid;
  border-width: thin;
`;

const Modal = ({ isVisible, closeModal, modalStyles, text }) => {
  return isVisible ? (
    <StyledOverlay style={modalStyles}>
      <StyledContent>
        <StyledText>{text}</StyledText>
        <Button label="close" buttonClick={closeModal} />
      </StyledContent>
    </StyledOverlay>
  ) : null;
};

export default Modal;
