import styled from "styled-components";
import Portfolio01 from "../../../molcules/main/Portfolio01";
import portfolioList from "../../../data/main/portfolioList";

const Portfolio = () => {
  return (
    <>
      <Container>
        <Header>
          <h1>Portfolio</h1>
          <span>My project list</span>
        </Header>
        <Portfolio01 data={portfolioList} />
      </Container>
    </>
  );
};

const Container = styled.div`
  /* margin-top: 50px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props)=>props.theme.body};
`;

const Header = styled.div`
  padding-top:50px;
  text-align: center;
  font-family: "BalooThambi2-VariableFont_wght";
  h1 {
    font-size: 55px;
    margin: 0;
    color: ${(props)=>props.theme.fontColor};
  }
  span {
    color: gray;
    font-size: 25px;
  }
  margin-bottom: 70px;
`;

export default Portfolio;
