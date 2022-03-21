import styled from "styled-components";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import profile from "../../../../assets/images/main/profile.png";
import { AboutList } from "../../../data/main/AboutList";

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
      {/* <Body>
        <Left 
        data-aos="fade-right" 
        data-aos-easing="ease-in" 
        data-aos-once="false"
        >
          <Img src={profile}/> 
        </Left>
        <Right
        data-aos="fade-down" 
        data-aos-easing="ease-in" 
        data-aos-once="false"
        >
          <Title>
            <h1>Hyejin Cho</h1>
            <span>조 혜 진</span>
          </Title>
            <Education>
                {AboutList.map(({id, icon, content})=>(
                <ListItem key={id}>
                    <Icon src={icon}/> 
                    <p>{content}</p>
                </ListItem>
                ))               
               }
            </Education>           
        </Right>
    </Body> */}
    </Container>
  );
};

const Container = styled.div`
  margin-top: 100px;
`;
const Header = styled.div`
  text-align: center;
  font-family: "BalooThambi2-VariableFont_wght";
  h1 {
    font-size: 55px;
    margin: 0;
  }
  span {
    color: gray;
    font-size: 25px;
  }
`;
const Body = styled.div`
  margin: 30px 50px 0 50px;
  display: flex;
`;
const Img = styled.img`
  width: 400px;
  height: 430px;
  margin-bottom: 30px;
`;
const Left = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 130px;
  font-family: "SuncheonB";
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  border-radius: 13px;
  /* padding:0 10px; */
  /* background: linear-gradient(to bottom, #8979ee 0%,#715df2 50%, #4c32f3 100%); */
  position: relative;
  h1 {
    font-size: 35px;
    line-height: 1.5;
    margin: 10px;
    color: #715df2;
    font-family: "BalooThambi2-VariableFont_wght";
  }
  span {
    font-size: 25px;
    margin: 10px;
    color: black;
  }
  /* &::after{
        content:"▼";
        color: #fff;
        font-size: 25px;
        position: absolute;
        right:20px;

    } */
`;

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
