import styled from "styled-components";
import { useEffect, useRef } from "react";
import { ReactComponent as Media } from "../../../../assets/images/insta/media.svg";
import { ReactComponent as ModalClose } from "../../../../assets/images/insta/modalClose.svg";

const Modal = ({ onClose }) => {
  const modalBox = useRef(null);
  const selectFile = useRef(null);

  const handleClick = (e) => {
    if (!modalBox.current.contains(e.target)) onClose();
  };

  useEffect(() => {
    document.body.style.overflow = "hidden"; //modal창 켜졌을 때 스크롤 되지 않게 하기
    return () => {
      document.body.style.overflow = ""; //modal창 사라지면 위 기능 제거하기
    };
  }, []);

  return (
    <>
      <Container onClick={handleClick}>
        <IconWrapper>
          <ModalClose onClick={handleClick} />
        </IconWrapper>
        <ModalBox ref={modalBox}>
          <Header>새 게시물 만들기</Header>
          <Main>
            <ImageWrapper>
              <Media />
            </ImageWrapper>
            <Text>사진과 동영상을 여기에 끌어다 놓으세요</Text>
            <input ref={selectFile} type="file" style={{ display: "none" }} />
            <Button onClick={() => selectFile.current.click()}>
              컴퓨터에서 선택
            </Button>
          </Main>
        </ModalBox>
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
  position: relative;
`;
const IconWrapper = styled.div`
  position: absolute;
  right: 25px;
  top: 20px;
  cursor: pointer;
`;
const ModalBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 15px;
  width: 44%;
  height: 75%;
`;
const Header = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  font-size: 16px;
  font-weight: 600;
  border-bottom: 1px solid #ddd;
  margin: 0;
  box-sizing: border-box;
`;
const Main = styled.body`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  height: 100%;
  border-radius: 15px;
`;
const ImageWrapper = styled.div`
  height: 77;
  width: 96;
`;
const Text = styled.h1`
  font-weight: 300;
  font-size: 22px;
  line-height: 26px;
`;
const Button = styled.button`
  box-sizing: border-box;
  width: 124px;
  height: 30px;
  background: #0095f6;
  color: white;
  border-radius: 4px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  margin-top: 8px;
`;
const Input = styled.input`
  opacity: 0;
`;
export default Modal;
