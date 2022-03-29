import styled from "styled-components";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import me from "../../../../assets/images/main/me.png";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  });

  return (
    <Container>
      <Header>
        <h1>About me</h1>
        <span>My introduction</span>
      </Header>
      <Body>
        <ImgMe src={me} />
        <contentBox>
          늘 배움에 대한 갈증을 느끼며 새로운 기술 공부에 대해 열린 자세를
          가지고 있습니다.
        </contentBox>
        <contentBox>탄탄한 퍼블리싱과 빠른 기술 습득력</contentBox>
      </Body>
    </Container>
  );
};

const Container = styled.div`
  margin-top: -4px;
  background: ${(props) => props.theme.body};
`;
const Header = styled.div`
  text-align: center;
  font-family: "NanumMyeongjo-Regular";
  
  h1 {
    font-size: 55px;
    margin: 0;
    padding-top: 70px;
    color: ${(props) => props.theme.fontColor};
    font-weight: 500;
  }
  span {
    color: gray;
    font-size: 23px;
  }
  margin-bottom: 70px;
`;
const Body = styled.div`
  display: flex;
  justify-content: center;
  font-family: "NanumMyeongjo-Regular";
`;

const ImgMe = styled.img`
  width: 250px;
  height: 350px;

`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 130px;
  font-size: 20px;

  h1 {
    border-bottom: 5px solid #8bc34a;
    font-size: 43px;
  }
  p {
    font-family: "NanumMyeongjo-Regular";
    font-size: 25px;
    color: gray;
  }
`;


export default About;
