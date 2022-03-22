import styled from "styled-components";
import { Link } from "react-router-dom";
import {useState} from "react";
import {ReactComponent as ArrowLeft} from "../../../assets/images/youtube/ArrowLeft.svg"
import {ReactComponent as ArrowRight} from "../../../assets/images/youtube/ArrowRight.svg"

const Portfolio01= ({data}) =>{

const [activeIndex,setActiveIndex]=useState(0)

   const handleClick=(n)=>{

      activeIndex===0 && n === -1 ? setActiveIndex(0) : setActiveIndex(activeIndex + n)
      activeIndex===data.length-1 && n === 1 ?setActiveIndex(data.length-1):setActiveIndex(activeIndex + n)
   }
    return(
      <Body>
        <IconWrapper onClick={()=>handleClick(-1)}>
          <ArrowLeft />
        </IconWrapper>
      <PortfolioWrapper>       
       <Wrapper index={activeIndex}>
         {data.map(({id, title, image, link, content, color})=>(
            <List key={id} >
            <Title>{title}</Title>
            <Content>
            <Left>
               <ImgYoutube src={image}/>
                  <Button color={color}>
                  <StyledLink to={link} target="_blank" rel="noopener noreferrer">Open project</StyledLink>
                  </Button>        
            </Left>
            <Right>
               <SubTitle>사용기술</SubTitle>
               <Text>{content}</Text>
            </Right>
            </Content>
            </List>
            ))       
         } 
         </Wrapper>
      </PortfolioWrapper>
          <IconWrapper onClick={()=>handleClick(1)}>
              <ArrowRight />
            </IconWrapper>
          </Body>  
  
     
   )
}

const Body= styled.div`
display: flex;
align-items: center;
`


const PortfolioWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
overflow: hidden;
`;
const IconWrapper = styled.div`
width:70px;
height:80px;
opacity: 0.6;
cursor: pointer;
z-index: 1;
`


const Wrapper = styled.div`
  width: 1100px;
  display: flex;
  div {
    flex-shrink: 0;
  }
  transform:${({index})=>`translateX(${index*-1100}px)`};
  transition: transform 1s;
  
 
`
const List = styled.div`
 width: 1100px;
  height: 500px;
 background: #eee;
`
const Title = styled.h1`
font-size:40px;
text-align: center;
font-family: "BalooThambi2-VariableFont_wght";
margin-bottom:30px;
`
const Content = styled.div`
display:flex;
margin: 20px;
`
const Left = styled.div`
height:100%;
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
margin-right:40px;
`

const Button = styled.button`
margin-top:30px;
width: 250px;
height:60px;
font-size: 37px;
background: ${({color})=>color};
border:none;
border-radius: 10px;
box-shadow: 6px 6px 11px 5px #eee;

`

const StyledLink = styled(Link)`
color:#fff;
font-family: "BalooThambi2-VariableFont_wght";
`
const ImgYoutube = styled.img`
width:400px;
height:200px;
`
const Right = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
`
const SubTitle = styled.h1``
const Text = styled.p``

export default Portfolio01;