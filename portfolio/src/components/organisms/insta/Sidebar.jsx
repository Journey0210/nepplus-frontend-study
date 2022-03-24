import styled from "styled-components";
import User from "../../../assets/images/youtube/User.png";
import recommendAccountList from "../../data/insta/recommendlist";
const Sidebar = () => {
  return (
    <>
      <Wrapper>
        <UserInfoWrapper>
          <UserInfo>
            <Profile src={User} />
            <Section>
              <UserId>root_hyejin</UserId>
              <Name>Hyejin🤍</Name>
            </Section>
          </UserInfo>
          <TextBlue>전환</TextBlue>
        </UserInfoWrapper>
        <RecommendTitle>
          <Title>회원님을 위한 추천</Title>
          <Text>모두보기</Text>
        </RecommendTitle>
        <RecommendList>
          {recommendAccountList.map(({ id, user }) => (
            <List>
              <UserInfo>
                <UserProfile src={user.profile} />
                <Section>
                  <UserId>{user.id}</UserId>
                  <RecommendText>{user.text}</RecommendText>
                </Section>
              </UserInfo>
              <TextBlue>팔로우</TextBlue>
            </List>
          ))}
        </RecommendList>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  width: 293px;
  margin-left: 24px;
  margin-top: 30px;
  position: sticky;
  top: 120px;
  height: 400px;
  opacity: 1;

  @media screen and (max-width: 950px) {
    opacity: 0;
  }
`;

const UserInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 23px 0;
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
`;
const Profile = styled.img`
  width: 56px;
  height: 56px;
  margin-right: 20px;
`;
const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;
const UserId = styled.div`
  color: #262626;
  font-size: 14px;
  font-weight: 600;
`;
const Name = styled.div`
  color: #8e8e8e;
  font-size: 14px;
`;
const RecommendText = styled.div`
  color: #8e8e8e;
  font-size: 14px;
`;
const RecommendTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
`;
const Title = styled.div`
  color: #8e8e8e;
  font-weight: 600;
  font-size: 14px;
`;
const TextBlue = styled.div`
  font-weight: 600;
  font-size: 12px;
  color: #0095f6;
`;
const Text = styled.div`
  font-weight: 600;
  font-size: 12px;
`;
const RecommendList = styled.div``;

const List = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 23px 0;
`;
const UserProfile = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 20px;
`;
export default Sidebar;
