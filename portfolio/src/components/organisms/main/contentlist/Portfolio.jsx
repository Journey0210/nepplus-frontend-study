import styled from "styled-components";
import Portfolio01 from "../../../molcules/main/Portfolio01"
import portfolioList from "../../../data/main/portfolioList"


const Portfolio = () => {

  
  return (
    <>
    <Container>
       <Header>
          <h1>Portfolio</h1>
          <span>My project list</span>
        </Header>                  
                <Portfolio01 data={portfolioList} />      
          <ButtonWrapper>
          <Button></Button>
          <Button></Button>
          <Button></Button>
          </ButtonWrapper>
      </Container>
    </>
  );
};


const Container = styled.div`
margin-top:50px;
display: flex;
flex-direction: column;
align-items: center;
`


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




const ButtonWrapper = styled.div``
const Button = styled.button`
 width:30px;
 height: 30px;
 border-radius: 50%;
 border:none;
 background: gray;
 &+&{
   margin-left: 20px;
 }
 margin-top: 20px;
`

export default Portfolio;
