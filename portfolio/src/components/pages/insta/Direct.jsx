import styled from "styled-components";
import { ReactComponent as Arrow } from "../../../assets/images/insta/V.svg";
import { ReactComponent as NewMessage } from "../../../assets/images/insta/newMassage.svg";
import UserInfoList from "../../organisms/insta/DirectUserInfoList";
const Direct = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <LeftBox>
            <Header>
              <UserId>root_hyejin</UserId>
              <ArrowWrapper>
                <Arrow />
              </ArrowWrapper>
              <NewMessageWrapper>
                <NewMessage />
              </NewMessageWrapper>
            </Header>
            <Main>
              <UserInfoList />
            </Main>
          </LeftBox>
          <RightBox>
            <ImageWrapper>
              <DirectMessage src="https://static.thenounproject.com/png/2796195-200.png" />
            </ImageWrapper>
            <Title>내 메시지</Title>
            <Text>친구나 그룹에 비공개 사진과 메시지를 보내보세요.</Text>
            <Button>메시지 보내기</Button>
          </RightBox>
        </Wrapper>
      </Container>
    </>
  );
};

const Container = styled.div`
  margin-top: 55px;
  display: flex;
  justify-content: center;
  padding: 20px;
  height: calc(100vh - 55px);
  box-sizing: border-box;

  @media screen and (max-width: 930px) {
    padding: 0;
  }
`;

const Wrapper = styled.div`
  background: #fff;
  width: 935px;
  max-width: 935px;

  border-radius: 3px;
  display: flex;
  border: 1px solid #ddd;
`;
const LeftBox = styled.div`
  width: 349px;
  border-right: 1px solid #ddd;
`;

const Header = styled.div`
  height: 60px;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const ArrowWrapper = styled.div`
  transform: rotate(180deg);
  margin-left: 9px;
`;
const NewMessageWrapper = styled.div`
  position: absolute;
  right: 20px;
`;
const UserId = styled.span`
  color: #262626;
  font-weight: 600;
  font-size: 16px;
`;
const Main = styled.div``;

const RightBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ImageWrapper = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  border: 2px solid;
  position: relative;
`;
const DirectMessage = styled.img`
  width: 75px;
  position: absolute;
  top: 10px;
  left: 6px;
  transform: rotate(10deg);
`;

const Title = styled.h2`
  font-weight: 300;
  font-size: 22px;
  line-height: 26px;
  color: #262626;
  margin: 12px 0;
`;
const Text = styled.span`
  display: inline-block;
  color: #8e8e8e;
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
`;
const Button = styled.button`
  box-sizing: border-box;
  width: 107.86px;
  height: 30px;
  background: #0095f6;
  color: white;
  border-radius: 4px;
  border: none;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  margin-top: 25px;
`;
export default Direct;
