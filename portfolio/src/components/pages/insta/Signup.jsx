import styled from "styled-components";
import { Box } from "../../atoms/insta/box";
import Line from "../../atoms/insta/line";
import { Input } from "../../atoms/insta/input";
import { Button } from "../../atoms/insta/button";
import DownloadApp from "../../organisms/insta/DownloadApp";
import Footer from "../../organisms/insta/Footer-2";

const Signup = () => {
  return (
    <>
      <Container>
        <Body>
          <Box>
            <LogoWrapper>
              <InstaLogo src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" />
            </LogoWrapper>
            <Title>
              친구들의 사진과 동영상을 보려면
              <br /> 가입하세요.
            </Title>
            <Form onSubmit={(e) => e.preventDefault()}>
              <ButtonFaceBook>
                <FacebookLogo src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-facebook-256.png" />
                <LoginText>Facebook으로 로그인</LoginText>
              </ButtonFaceBook>
              <Line />
              <Input placeholder="휴대폰 번호 또는 이메일 주소" />
              <Input placeholder="성명" />
              <Input placeholder="사용자 이름" />
              <Input placeholder="비밀번호" />
              <Button>가입</Button>
            </Form>
          </Box>
          <Box>
            <LoginWrapper>
              <InfoText>계정이 있으신가요?</InfoText>
              <Login>로그인</Login>
            </LoginWrapper>
          </Box>
          <DownloadApp />
        </Body>
        <Footer />
      </Container>
    </>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Body = styled.div`
  height: 843px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 17px;
`;
const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Title = styled.h3`
  color: #8e8e8e;
  font-size: 17px;
  font-weight: 600;
`;
const InstaLogo = styled.img`
  margin: 22px auto;
  width: 175px;
  height: 51px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ButtonFaceBook = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 268px;
  height: 30px;
  background: #0095f6;
  color: white;
  border-radius: 4px;
  border: none;
  margin: 8px 0;
  font-weight: 600;
  cursor: pointer;
`;
const FacebookLogo = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;
const LoginText = styled.div`
  font-size: 14px;
  font-weight: 600;
`;
const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px 20px;
`;
const InfoText = styled.span`
  font-size: 14px;
`;
const Login = styled.a`
  font-size: 14px;
  color: #0095f6;
  font-weight: 600;
  cursor: pointer;
  margin-left: 6px;
`;
export default Signup;
