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
        <Left>
          <ImgMe src={me}/>     
        </Left>
        <Right>
         <h1>"어제보다 오늘 더 성장하는 개발자"</h1>
         <p>
          프론트엔드 개발자로서,
          사용자와 상호작용할 수 있는 웹 사이트를 제작하는 일은 참 즐거운 일입니다.<br/>
          하지만 그와 동시에 어떻게 하면 더 좋은 프론트엔드 개발자가 될 수 있는지 고민하게 합니다. 
          저는 빠르게 변화하는 웹 프론트엔드 트렌드에 발 맞춰 트렌디한 프레임워크를 이해하면서도
          그만큼 Javascript의 기본기는 흔들리지 않는 개발자가 되려고 노력하고 있습니다.
          이를 위해 자바스크립트의 자료구조와 알고리즘 공부에 대해 틈틈히 공부하고 있습니다. 
          
          하나의 웹사이트는 웹 디자이너, 프론트엔드 개발자, 백엔드 개발자 등의 협업을 통해 완성됩니다.
          클라이언트에 대한 지식을 넘어서서 서버와 데이터에 대한 공부도 게을리 하지 않는 개발자가 되고자 합니다.     
           
          지금은 작은 포부에 지나지 않지만, 
          매일매일 공부하고 기록하면서, 또 직접 부딪혀 개발하면서 나날이 성장하는 개발자가 되리라 확신합니다. 

         </p>
        </Right> 
        </Body>
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
  margin-bottom: 70px;
`;
const Body = styled.div`
display:flex;
`
const Left = styled.div`
  margin-left: 60px;
  margin-bottom: 60px;
`;

const ImgMe =styled.img`
width:350px;
height:450px;
`
const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 130px;
  font-size: 20px;

  h1{
    border-bottom: 5px solid #8bc34a;
    font-size: 43px;
  }
  p{
    font-family: "SuncheonB";
    font-size:25px;
    color:gray;
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
