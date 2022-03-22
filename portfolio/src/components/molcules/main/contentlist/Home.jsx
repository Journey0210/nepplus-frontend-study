import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ScrollDown from "./ScrollDown";

const Home = () => {
  useEffect(() => {
    Aos.init();
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
      </Container>

      <ScrollDown />
    </>
  );
};

const Container = styled.div`
  position: relative;
`;

const Img = styled.img`
  width: 100%;
  height: 600px;
`;
const ImgShadow = styled.div`
  width: 100%;
  height: 99.5%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;

  h1 {
    color: white;
    font-size: 70px;
  }
  span {
    font-size: 70px;
    border-bottom: 6px solid #8bc34a;
  }
`;
const TextBox = styled.div`
  padding: 60px;
`;

const Left = styled.div`
  margin: 0 80px 0 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Right = styled.div``;

const ItemTop = styled.div``;

const Title = styled.h1`
  font-size: 65px;
  margin: 0;
`;
const Text = styled.p`
  font-size: 30px;
  color: gray;
  margin: 0;
  font-weight: 600;
`;
const Script = styled.p`
  font-size: 23px;
  color: gray;
  margin: 20px 0;
  line-height: 1.5;
`;
const Button = styled.button`
  width: 200px;
  height: 60px;
  border: none;
  border-radius: 10px;
  background: #715df2;
  color: white;
  font-size: 20px;
  font-family: "BalooThambi2-VariableFont_wght";
  margin-top: 50px;
`;

const Me = styled.img`
  width: 306px;
  height: 396px;
  border-radius: 30%;
  margin: 0 50px;
`;
export default Home;
