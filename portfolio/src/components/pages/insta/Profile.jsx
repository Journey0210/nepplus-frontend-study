import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";
const Profile = () => {
  return (
    <>
      <Wrapper>
        <UserInfo>
          <ProfileImage src="https://cdn1.iconfinder.com/data/icons/flowers-7/128/flower_flowers_blossom-04-256.png" />
          <Section>
            <Top>
              <UserId>root_hyejin</UserId>
              <EditProfile>프로필 편집</EditProfile>
              <IconWrapper></IconWrapper>
            </Top>
            <Middle>
              <Posts>0</Posts>
              <Follower>0</Follower>
              <Follow>9</Follow>
            </Middle>
            <UserName>Hyejin🤍</UserName>
          </Section>
        </UserInfo>
        <PostInfo>
          <Nav>
            <List>
              <Link to="/insta/profile/posts">게시물</Link>
            </List>
            <List>
              <Link to="/insta/profile/saved">저장됨</Link>
            </List>
            <List>
              <Link to="/insta/profile/tagged">태그됨</Link>
            </List>
          </Nav>
        </PostInfo>
        <Outlet />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin: 0 auto;
  margin-top: 61px;
  max-width: 935px;
  padding: 30px 20px 0;
`;
const UserInfo = styled.div`
  display: flex;
  border-bottom: 1px solid #ddd;
`;
const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  margin-right: 100px;
`;
const Section = styled.div``;
const Top = styled.div`
  display: flex;
  align-items: center;
`;
const Middle = styled.div``;
const Posts = styled.span``;
const Follower = styled.span``;
const Follow = styled.span``;
const UserId = styled.p`
  color: #262626;
  font-weight: 300;
  font-size: 28px;
  line-height: 32px;
`;
const EditProfile = styled.div`
  font-size: 14px;
  font-weight: 600;
  padding: 5px 9px;
  border: 1px solid #ddd;
  height: 30px;
  box-sizing: border-box;
  border-radius: 3px;
`;
const IconWrapper = styled.div``;
const UserName = styled.span``;
const PostInfo = styled.div``;
const Nav = styled.div`
  display: flex;
  justify-content: center;
`;
const List = styled.div`
  color: #262626;
  & + & {
    margin-left: 80px;
  }
`;
export default Profile;
