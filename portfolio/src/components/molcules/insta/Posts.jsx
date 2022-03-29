import styled from "styled-components";
import { HomeBox } from "../../atoms/insta/box";
import { postList } from "../../data/insta/postList";
import { ReactComponent as Smile } from "../../../assets/images/insta/Smile.svg";
import { ReactComponent as Like } from "../../../assets/images/insta/Like.svg";
import { ReactComponent as Comment } from "../../../assets/images/insta/Comment.svg";
import { ReactComponent as Direct } from "../../../assets/images/insta/Direct.svg";
import { ReactComponent as Save } from "../../../assets/images/insta/Save.svg";
import { ReactComponent as Option } from "../../../assets/images/insta/Option.svg";
import { useState } from "react";
import CommentModal from "../../organisms/insta/modal/CommentModal";
const Posts = () => {
  const [isModalShow, setIsModalShow] = useState(false);
  const [nowPost, setNowPost] = useState({});
  return (
    <>
      <Wrapper>
        {postList.map(({ id, user, post }) => (
          <HomeBox key={id}>
            <UserInfo>
              <Profile src={user.profile} />
              <Name>{user.name}</Name>
              <IconOptionWrapper>
                <Option />
              </IconOptionWrapper>
            </UserInfo>
            <PostImage src={post.image} height={post.imageSize} />
            <IconWrapper>
              <Left>
                <Icon>
                  <Like />
                </Icon>
                <Icon>
                  <Comment />
                </Icon>
                <Icon>
                  <Direct />
                </Icon>
              </Left>
              <Right>
                <Icon>
                  <Save />
                </Icon>
              </Right>
            </IconWrapper>
            <PostInfo>
              <LikeCount>좋아요 {post.like}개</LikeCount>
              <Name>{user.name}</Name>
              <Content>{post.content}</Content>
              <CommentCount
                onClick={() => {
                  setIsModalShow(true);
                  setNowPost(post);
                }}
              >
                댓글 {post.commentCount} 개 모두 보기
              </CommentCount>
              <CreateAt>{post.createAt}전</CreateAt>
            </PostInfo>
            <CommentBox>
              <Icon>
                <Smile />
              </Icon>
              <Input placeholder="댓글 달기..." />
              <BtnPost>게시</BtnPost>
            </CommentBox>
          </HomeBox>
        ))}
        {isModalShow && (
          <CommentModal onClose={() => setIsModalShow(false)} post={nowPost} />
        )}
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div``;
const UserInfo = styled.div`
  padding: 0 12px 12px 12px;
  display: flex;
  align-items: center;
  position: relative;
`;
const Profile = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 12px;
  border: 2px solid #da307d;
`;
const Name = styled.span`
  color: #262626;
  font-size: 14px;
  font-weight: 500;
  display: inline-block;
  margin-right: 8px;
`;

const IconOptionWrapper = styled.div`
  position: absolute;
  right: 16px;
`;
const PostImage = styled.img`
  width: 613px;
  height: ${({ height }) => height};
`;
const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0 6px 16px;
`;
const Left = styled.div`
  display: flex;
`;
const Right = styled.div``;
const Icon = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 16px;
`;
const PostInfo = styled.div`
  padding: 12px;
`;
const LikeCount = styled.p`
  margin: 0;
  margin-bottom: 5px;
  color: #262626;
  font-size: 14px;
  font-weight: 600;
`;
const Content = styled.span`
  color: #262626;
  font-size: 14px;
`;
const CommentCount = styled.p`
  margin: 0;
  font-size: 14px;
  color: #8e8e8e;
  margin-top: 5px;
`;
const CreateAt = styled.span`
  color: #8e8e8e;
  font-size: 10px;
`;
const CommentBox = styled.div`
  display: flex;
  padding: 6px 16px;
  border-top: 1px solid #ddd;
  align-items: center;
  height: 40px;
`;
const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  ::placeholder {
    font-size: 14px;
  }
`;
const BtnPost = styled.button`
  color: #b2dffc;
  border: none;
  background: none;
  font-weight: 600;
  font-size: 14px;
`;
export default Posts;
