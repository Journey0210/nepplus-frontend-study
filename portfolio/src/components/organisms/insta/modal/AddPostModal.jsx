import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { ReactComponent as Media } from "../../../../assets/images/insta/media.svg";
import { ReactComponent as ModalClose } from "../../../../assets/images/insta/modalClose.svg";
import { BackDrop } from "../../../atoms/insta/backDrop";
import { ModalContainer } from "../../../atoms/insta/modalContainer";

const Modal = ({ onClose }) => {
  const modalBox = useRef(null);
  const selectFile = useRef(null);
  const [previewSRC, setPreviewSRC] = useState("");

  const handleClick = (e) => {
    if (!modalBox.current.contains(e.target)) onClose();
  };

  useEffect(() => {
    document.body.style.overflow = "hidden"; //modal창 켜졌을 때 스크롤 되지 않게 하기
    return () => {
      document.body.style.overflow = ""; //modal창 사라지면 위 기능 제거하기
    };
  }, []);

  const handleChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSRC(reader.result);
    };
    

  };
  return (
    <>
      <BackDrop onClick={handleClick}>
        <IconWrapper>
          <ModalClose onClick={handleClick} />
        </IconWrapper>
        <ModalBox ref={modalBox}>
          <Header>새 게시물 만들기</Header>
          {previewSRC ? (
            <PreviewWrapper>
              <PreviewImage src={previewSRC} />
            </PreviewWrapper>
          ) : (
            <Main>
              <ImageWrapper>
                <Media />
              </ImageWrapper>
              <Guid>사진과 동영상을 여기에 끌어다 놓으세요</Guid>
              <InputFile ref={selectFile} type="file" onChange={handleChange} />
              <Button onClick={() => selectFile.current.click()}>
                컴퓨터에서 선택
              </Button>
            </Main>
          )}
        </ModalBox>
      </BackDrop>
    </>
  );
};

const IconWrapper = styled.div`
  position: absolute;
  right: 25px;
  top: 20px;
  cursor: pointer;
`;
const ModalBox = styled(ModalContainer)`
  width: 39%;
  height: 82%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
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
const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  flex: 1;
  border-radius: 15px;
`;
const ImageWrapper = styled.div`
  height: 77;
  width: 96;
`;
const Guid = styled.h1`
  font-weight: 300;
  font-size: 22px;
  line-height: 26px;
`;
const InputFile = styled.input`
  display: none;
`;
const Button = styled.button`
  box-sizing: border-box;
  width: 120px;
  height: 30px;
  background: #0095f6;
  color: white;
  font-size: 14px;
  border-radius: 4px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  margin-top: 8px;
`;

const PreviewWrapper = styled.div`
  flex: 1;
`;
const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
`;
export default Modal;
