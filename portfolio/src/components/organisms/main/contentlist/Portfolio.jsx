import styled from "styled-components";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
// import portfolioList from "../../../data/main/portfolioList";

const Portfolio = () => {
  const [activeIndex,setActiveIndex] = useState(1)
  return (
    <>
      <Container>
        <Header>
          <h1>Portfolio</h1>
          <span>My project list</span>
        </Header>
        {/* <Portfolio01 data={portfolioList} /> */}
        <Nav>
          <List onClick={()=>setActiveIndex(1)} active={activeIndex===1}>
          <StyledLink to="/">Project 1</StyledLink>
          </List>
          <List onClick={()=>setActiveIndex(2)} active={activeIndex===2}>
          <StyledLink to="/portfolio2">Project 2</StyledLink>
          </List>
          <List onClick={()=>setActiveIndex(3)} active={activeIndex===3}>
          <StyledLink to="/portfolio3">Project 3</StyledLink>
          </List>
        </Nav>
        <Outlet />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props)=>props.theme.body};
  font-family: "NanumMyeongjo-Regular";
  padding-top:50px;
  padding-left:80px;
  padding-right:80px;
`;

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

const Nav = styled.div`
display: flex ;
font-size:23px;
padding-bottom: 30px;
border-bottom: 1px solid #ddd;

`
const List = styled.div`

&+&{
  margin-left: 50px;
}
padding: 10px 15px;
box-shadow: ${({active})=>active && "inset 1px 1px 6px -1px rgb(0 0 0 / 22%)"};
color: ${(props) => props.theme.fontColor};
`
const StyledLink = styled(Link)`
color: ${(props) => props.theme.fontColor}; 
font-size: 26px;
`
export default Portfolio;
