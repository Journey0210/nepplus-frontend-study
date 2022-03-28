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
  font-family: "BalooThambi2-VariableFont_wght";
  h1 {
    font-size: 55px;
    margin: 0;
    padding-top: 70px;
    color: ${(props) => props.theme.fontColor};
  }
  span {
    color: gray;
    font-size: 25px;
  }
  margin-bottom: 70px;
`;
const Body = styled.div`
  display: flex;
  justify-content: center;
`;
const Left = styled.div`
  margin-left: 60px;
  margin-bottom: 60px;
`;

const ImgMe = styled.img`
  width: 250px;
  height: 350px;
  border-radius: 50%;
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
    font-family: "SuncheonB";
    font-size: 25px;
    color: gray;
  }
`;
// const Title = styled.div`
//   display: flex;
//   align-items: center;
//   border-radius: 13px;
//   /* padding:0 10px; */
//   /* background: linear-gradient(to bottom, #8979ee 0%,#715df2 50%, #4c32f3 100%); */
//   position: relative;
//   h1 {
//     font-size: 35px;
//     line-height: 1.5;
//     margin: 10px;
//     color: #715df2;
//     font-family: "BalooThambi2-VariableFont_wght";
//   }
//   span {
//     font-size: 25px;
//     margin: 10px;
//     color: black;
//   }
//   /* &::after{
//         content:"▼";
//         color: #fff;
//         font-size: 25px;
//         position: absolute;
//         right:20px;

//     } */
// `;

const Education = styled.div`
  border: 5px solid #715df2;
  border-radius: 12px;
  padding: 15px;
`;
const ListItem = styled.div`
  display: flex;
  align-items: center;
  color: gray;
  p {
    font-size: 20px;
    margin: 15px;
  }

  :nth-child(3) {
    color: black;
  }
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin: 0 12px;
`;

export default About;
