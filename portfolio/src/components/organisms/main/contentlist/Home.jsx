import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ScrollDown from "./ScrollDown";
import me from "../../../../assets/images/main/122.png";
const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <>
      <Container>
        <Left>
          <ItemTop data-aos="fade-down" data-aos-once="false">
            <Title>Hi, I'am Hyejin</Title>
            <Text>Frontend developer</Text>
            <Script>
              I Creates websites using web languages
              <br />
              such as HTML, CSS, and JavaScript allow users
              <br />
              to access and interact with the site.
            </Script>
            <Button> Thanks for Visiting</Button>
          </ItemTop>
        </Left>
        <Right>
          <Me src={me} />
        </Right>
      </Container>
      <ScrollDown />
    </>
  );
};

const Container = styled.div`
  margin: 0;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-family: "BalooThambi2-VariableFont_wght";
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
