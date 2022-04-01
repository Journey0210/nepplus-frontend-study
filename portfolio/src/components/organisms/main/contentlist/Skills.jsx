import styled, {css} from "styled-components";
import {iconList} from "../../../data/main/skillList"
import {skillList} from "../../../data/main/skillList"
import arrow from"../../../../assets/images/main/arrow_icon.svg"
import { useEffect,useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 800 });
  },[]);

  const [activeIndex,setActiveIndex]=useState(0)
  const handleClick =(id)=>{
    activeIndex===id?setActiveIndex(-1):setActiveIndex(id)
  }
  return <Container>
       <Header>
          <h1>Skills</h1>
          <span>My skills</span>
        </Header>
        <Main>
          <IconWrapper>
            {iconList.map(({id, icon,dataAosDelay})=>(
              <Icon key={id} src={icon} data-aos="fade-left" data-aos-delay={dataAosDelay}/>
            ))}
          </IconWrapper>
          <BoxWrapper>
            {skillList.map(({id, name, content})=>(
              <Item active={activeIndex===id}>
              <HeaderBox onClick={()=>handleClick(id)} >
                {name}
                <IconArrow src={arrow} />
                </HeaderBox>
              <BodyBox >{content}</BodyBox>               
          </Item>
            ))}        
          </BoxWrapper>
          


                
        </Main>
  </Container>;
};
const Container = styled.div`
 background: ${(props)=>props.theme.body};
 font-family: "NanumMyeongjo-Regular";
 padding-top: 20px;
 padding-left: 80px;
 padding-right: 80px;
 padding-bottom:130px;
 display: flex;
 flex-direction: column;
 align-items: center;

`
const Header = styled.div`
  padding-top:50px;
  text-align: center;
  
  h1 {
    font-size: 55px;
    margin: 0;
    color: ${(props)=>props.theme.fontColor};
    font-weight: 500;
  }
  span {
    color: gray;
    font-size: 23px;
  }
  margin-bottom: 70px;
`;
const Main = styled.div`
`
const IconWrapper = styled.div`
display:flex;
justify-content:center;
`
const Icon = styled.img`
width: 100px;
height: 100px;
background: #fff;
&+&{
  margin-left: 20px;
}
`
const BoxWrapper = styled.div`
margin-top:50px;
display: flex;
flex-direction: column;
align-items: center;
`
const Item = styled.div`
${({active})=>active && css`
  ${IconArrow}{
    transform: rotate(270deg);
  }
  ${BodyBox}{
    display:block;
  }
`}
`
const HeaderBox = styled.div`
display: flex;
align-items: center;
border: 1px solid #ddd;
width: 750px;
height: 50px;
padding: 10px 20px;
box-sizing: border-box;
font-size: 20px;
font-weight: 600;
background:#efebe9 ;
position: relative;
`
const BodyBox=styled.div`
border: 1px solid #ddd;
width: 750px;
padding: 10px 18px;
box-sizing: border-box;
font-size: 16px;
line-height:1.7;
display:none;
background-color:#fff;
color:#000;
`
const IconArrow = styled.img`
 position: absolute;
 right: 15px; 
 width: 20px;
 height:20px;
 transform: rotate(90deg);
 transition: transform 0.5s;

`

export default Skills;
