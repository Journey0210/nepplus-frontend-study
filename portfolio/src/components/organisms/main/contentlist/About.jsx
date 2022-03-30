import styled from "styled-components";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import aboutMe from "../../../../assets/images/main/aboutMe.jpg";

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
      <Main>
        <TextBox>
          <Title>공부하는 프론트엔드 개발자 조혜진</Title><br/>
          <Text>어떻게 하면 좋은 프론트엔드 개발자가 될 수 있을지 늘 고민합니다.</Text> 
          <Text>새로운 기술을 배우는 일을 즐거워하고, 빠른 기술 습득력을 갖추고 있습니다.</Text>
          <Text>혼자보다 함께 일하는 것을 좋아합니다.</Text> 
          <Text>탄탄한 퍼블리싱 실력을 기반으로 디테일한 부분도 놓치지 않으려고 합니다.</Text>
          <Text>매일매일 공부하고 기록하면서, 또 직접 부딪혀 개발하면서</Text> 
          <Text>어제보다 오늘 더 성장하는 개발자가 되려고 노력하고 있습니다.</Text>
          
          <Text></Text>
        </TextBox>
        <ImgMe src={aboutMe} />
        
        
      </Main>
    </Container>
  );
};

const Container = styled.div`
  margin-top: -4px;
  background: ${(props) => props.theme.body};
  padding-left: 100px;
  padding-right:100px;
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
const Main = styled.div`
  display: flex;
  justify-content: center;
  font-family: "NanumMyeongjo-Regular";
  color: ${(props) => props.theme.fontColor};
`;

const ImgMe = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  margin-left: 30px;

`;

const TextBox = styled.div``;
const Title = styled.h2`
`
const Text = styled.p`
  font-size:20px;
`


export default About;
