import React from "react";
import styled from "styled-components";

const Modal = (props) => {
  return (
    <ModalBackground>
      <Container>
        <div>이름: {props.name}</div>
        <div>취미: {props.hobby}</div>
        <div>즐겨보는 스포츠: {props.favoriteSports}</div>
        <div>전공: 물리</div>
        <div>좋아하는 야구팀: 엘지</div>
        <button onClick={() => props.setModal(false)}>나가기</button>
      </Container>
    </ModalBackground>
  );
};

export default Modal;

const ModalBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
`;

const Container = styled.div`
  background-color: skyblue;
  width: 70%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
