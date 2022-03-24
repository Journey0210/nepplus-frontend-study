import styled from "styled-components";
import { Input } from "../../atoms/insta/input";
import { Button } from "../../atoms/insta/button";
import { Box } from "../../atoms/insta/box";
import Line from "../../atoms/insta/line";
import DownloadApp from "../../organisms/insta/DownloadApp";
import LoginImage from "../../organisms/insta/LoginImage";
import Footer from "../../organisms/insta/Footer-1";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container>
      <Body>
        <Left>
          <LoginImage />
        </Left>
        <Right>
          <Box>
            <LogoWrapper>
              <InstaLogo src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" />
            </LogoWrapper>
            <Form onSubmit={(e) => e.preventDefault()}>
              <InputWrapper>
                <Input placeholder="전화번호, 사용자 이름 또는 이메일" />
              </InputWrapper>
              <Input placeholder="비밀번호" type="password"/>
              <Link to="/insta/main">
              <Button>로그인</Button>
              </Link>
              <Line />
              <ButtonFaceBook>
                <FacebookLogo src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-facebook-256.png" />
                <LoginText>Facebook으로 로그인</LoginText>
              </ButtonFaceBook>
              <FindPassword>비밀번호를 잊으셨나요?</FindPassword>
            </Form>
          </Box>
          <Box>
            <SignUpWrapper>
              <InfoText>계정이 없으신가요?</InfoText>
              <Link to="/insta/signup">
                <SignUp>가입하기</SignUp>
              </Link>
            </SignUpWrapper>
          </Box>
          <DownloadApp />
        </Right>
      </Body>
      <Footer />
    </Container>
  );
};
const Container = styled.div``;
const Body = styled.div`
  height: 780px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  padding-bottom: 32px;
`;
const Left = styled.div``;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const InputWrapper = styled.div`
  position: relative;
`;
const InstaLogo = styled.img`
  margin: 28px 22px 12px 22px;
  width: 175px;
  height: 51px;
`;
const Form = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ButtonFaceBook = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: none;
  height: 20px;
  cursor: pointer;
`;
const FacebookLogo = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;
const LoginText = styled.div`
  color: #385185;
  font-size: 14px;
  font-weight: 600;
`;
const FindPassword = styled.a`
  color: #00376b;
  font-size: 12px;
  margin-top: 12px;
  margin-bottom: 10px;
  cursor: pointer;
`;
const SignUpWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 20px;
`;
const InfoText = styled.span`
  font-size: 14px;
`;
const SignUp = styled.a`
  font-size: 14px;
  color: #0095f6;
  font-weight: 600;
  cursor: pointer;
  margin-left: 6px;
`;
export default Login;
