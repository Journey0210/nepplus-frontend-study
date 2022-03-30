import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ScrollDown from "./ScrollDown";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <>
      <Container>
        <Img src="http://www.ucc.ie/en/media/mandc/newsimagesnew/2020/mar/2020-03-24Top_Ten_Tips_Study_Home-800x400.jpg" />
        <ImgShadow>
          <TextBox>
            <h1 data-aos="fade-right" data-aos-delay="200">
              안녕하세요
            </h1>
            <h1 data-aos="fade-right" data-aos-delay="1000">
              공부하는 프론트엔드 개발자
            </h1>
            <h1 data-aos="fade-right" data-aos-delay="1800">
              <span>조혜진</span>입니다.
            </h1>
          </TextBox>
        </ImgShadow>
        <ScrollDown />
      </Container>
    </>
  );
};

const Container = styled.div`
  position: relative;
`;

const Img = styled.img`
  width: 100%;
  height: 750px;
`;
const ImgShadow = styled.div`
  width: 100%;
  height: 99.7%;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;

  h1 {
    color: white;
    font-size: 73px;
    font-family: "NanumMyeongjo-Regular";
    font-weight:600;
  }
  span {
    font-size: 70px;
    border-bottom: 6px solid #9ccc65;
  }
`;
const TextBox = styled.div`
  padding: 60px 60px 60px 90px;
`;

export default Home;
