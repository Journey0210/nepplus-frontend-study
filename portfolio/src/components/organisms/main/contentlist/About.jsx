import styled from "styled-components";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import aboutMe from "../../../../assets/images/main/aboutMe.jpg";
import { aboutList } from "../../../data/main/AboutList";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  },[]);

  return (
    <Container>
      <Header>
        <h1>About me</h1>
        <span>My introduction</span>
      </Header>
      <Main>
        <TextBox data-aos="fade-down" data-aos-easing="linear">
          <Title>공부하는 프론트엔드 개발자 조혜진</Title><br/>
          {aboutList.map(({id, text})=>(
            <Text key={id}>{text}</Text> 
          ))}
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
