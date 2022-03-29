import styled from "styled-components";
import { useEffect, useRef } from "react";
import { ReactComponent as ModalClose } from "../../../../assets/images/insta/modalClose.svg";
import { ReactComponent as MiniLike } from "../../../../assets/images/insta/miniLike.svg";
import { BackDrop } from "../../../atoms/insta/backDrop";
import { ModalContainer } from "../../../atoms/insta/modalContainer";

const CommentModal = ({ onClose, post }) => {
  const modalBox = useRef(null);

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
      <BackDrop onClick={handleClick}>
        <IconWrapper>
          <ModalClose onClick={handleClick} />
        </IconWrapper>
        <ModalBox ref={modalBox}>
          <ImageWrapper>
            <PostImage src={post.image} />
          </ImageWrapper>
          <Main>
            <Title>
              <ProfileImage />
            </Title>
            {post.comment.map(({ user, content, like, createAt }) => (
              <CommentList>
                <ProfileImage src={user.profile} />
                <UserId>{user.name}</UserId>
                <Content>{content}</Content>
                <CreateAt>{createAt}</CreateAt>
                <Like>좋아요 {like}개</Like>
                <Replys>답글 달기</Replys>
                <IconWrapper>
                  <MiniLike />
                </IconWrapper>
              </CommentList>
            ))}
          </Main>
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
  width: 90%;
  max-width: 1400px;
  max-height: 900px;
  display: flex;
`;
const PostImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 15px;
  width: 500px;
  max-width: 500px;
`;
const ImageWrapper = styled.div`
  aspect-ratio: 1 / 1;
  position: relative;
  width: 100%;
`;
const Title = styled.div``;
const ProfileImage = styled.img``;
const CommentList = styled.div``;
const UserId = styled.span``;
const Content = styled.span``;
const CreateAt = styled.span``;
const Like = styled.span``;
const Replys = styled.span``;

export default CommentModal;
