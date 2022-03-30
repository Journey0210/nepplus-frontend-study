import styled from "styled-components";
import { Link, Outlet } from "react-router-dom";
// import portfolioList from "../../../data/main/portfolioList";

const Portfolio = () => {
  return (
    <>
      <Container>
        <Header>
          <h1>Portfolio</h1>
          <span>My project list</span>
        </Header>
        {/* <Portfolio01 data={portfolioList} /> */}
        <Nav>
          <List>
          <Link to="/portfolio1">portfolio 1</Link>
          </List>
          <List>
          <Link to="/portfolio2">portfolio 2</Link>
          </List>
          <List>
          <Link to="/portfolio3">portfolio 3</Link>
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
`
export default Portfolio;
