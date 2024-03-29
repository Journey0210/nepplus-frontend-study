import styled from "styled-components";
import { useEffect, useRef } from "react";
import { ReactComponent as ModalClose } from "../../../../assets/images/insta/modalClose.svg";
import { ReactComponent as MiniLike } from "../../../../assets/images/insta/miniLike.svg";
import { ReactComponent as Option } from "../../../../assets/images/insta/Option.svg";
import { ReactComponent as Smile } from "../../../../assets/images/insta/Smile.svg";
import { BackDrop } from "../../../atoms/insta/backDrop";
import { ModalContainer } from "../../../atoms/insta/modalContainer";
import CommentIconList from "../../../molecules/insta/CommentIconList"

const CommentModal = ({ onClose, post, user }) => {
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
              <PostUserInfo>
                <ProfileImage src={user.profile}/>
                <UserId>{user.name}</UserId>
                <Validated src={user.validated}/>
                <Following>•  팔로잉</Following>
              </PostUserInfo>
              <IconOptionWrapper>
                <Option/>
              </IconOptionWrapper>             
            </Title>
            <Comments>
            <List>
                <UserInfo>
                  <ProfileImage src={user.profile} />
                  <CommentInfo>
                    <div>
                      <UserId>{user.name}</UserId>
                      <Validated src={user.validated}/>
                      <Content>{post.content}</Content>
                    </div>
                    <div>
                      <CreateAt>{post.createAt}</CreateAt>
                      </div>
                  </CommentInfo>
                </UserInfo>  
                </List>     
            {post.comment.map(({ id, user, content, like, createAt }) => (
              <List key={id}>
                <UserInfo>
                  <ProfileImage src={user.profile} />
                  <CommentInfo>
                    <div>
                      <UserId>{user.name}</UserId>
                      <Validated src={user.validated}/>
                      <Content>{content}</Content>
                    </div>
                    <div>
                      <CreateAt>{createAt}</CreateAt>
                      <Like>좋아요 {like}개</Like>
                      <Reply>답글 달기</Reply>
                      </div>
                  </CommentInfo>
                </UserInfo>                
                <IconMiniLikeWrapper>
                  <MiniLike />
                </IconMiniLikeWrapper>
              </List>
            ))}
            </Comments>
            <CommentIconList/>
            <PostInfo>
              <LikeCount>좋아요 {post.like}개</LikeCount>
              <CreateAt>{post.createAt}전</CreateAt>
            </PostInfo>
            <CommentBox>
              <Icon>
                <Smile />
              </Icon>
              <Input placeholder="댓글 달기..." />
              <BtnPost>게시</BtnPost>
            </CommentBox>
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
  width: 80%;
  height:90%;
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
  background: #fff;
  border-radius: 15px;
  width: calc(100% - 250px);
  box-sizing: border-box;
`;
const ImageWrapper = styled.div`
 position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
`;
const Title = styled.div`
display: flex;
justify-content: space-between;
width:100%;
padding:14px;
box-sizing: border-box;
color: #262626;
border-bottom:1px solid #ddd;
`;
const PostUserInfo = styled.div`
display: flex;
align-items:center;
`

const UserInfo = styled.div`
display:flex;
`
const CommentInfo = styled.div`

div+div {
  margin-top:13px;
  color: #8e8e8e;
  font-size: 12px;
  font-weight:600;

  span+span{
    margin-left:10px;
  }
}
`
const Comments = styled.div`
width:100%;
padding:14px;
box-sizing: border-box;
color: #262626;
flex:1;
`
const ProfileImage = styled.img`
width:32px;
height:32px;
border-radius: 50%;
border: 1px solid #ddd;
margin-right: 13px;

`;
const Validated = styled.img`
width:15px;
height:15px;
margin: 0 5px;
`
const Following = styled.span`
font-size: 14px;
font-weight: 600;
`
const IconOptionWrapper = styled.div``
const List = styled.div`
display:flex;
align-items:center;
justify-content: space-between;
margin-bottom:14px;

`;
const UserId = styled.span`
font-size: 14px;
font-weight: 600;
`;
const Content = styled.span`

`;
const CreateAt = styled.span`
font-weight:400;
color: #8e8e8e;
font-size: 12px;
`;
const Like = styled.span``;
const Reply = styled.span``;
const IconMiniLikeWrapper = styled.div`
margin-left: 10px;
`
const PostInfo = styled.div`
width:100%;
padding: 10px 0 10px 16px;
box-sizing: border-box;
`
const LikeCount = styled.p`
  margin: 0;
  margin-bottom: 5px;
  color: #262626;
  font-size: 14px;
  font-weight: 600;
`;
const CommentBox = styled.div`
  width:100%;
  display: flex;
  padding: 10px 16px;
  border-top: 1px solid #ddd;
  align-items: center;
  box-sizing: border-box;
`;
const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  ::placeholder {
    font-size: 14px;
  }
  height:30px;
  font-size: 14px;
`;
const BtnPost = styled.button`
  color: #b2dffc;
  border: none;
  background: none;
  font-weight: 600;
  font-size: 14px;
`;
const Icon = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 16px;
`;

export default CommentModal;
