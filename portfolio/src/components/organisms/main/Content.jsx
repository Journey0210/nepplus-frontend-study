import styled from "styled-components";
import Home from "./contentlist/Home";
import About from "./contentlist/About";
import Portfolio from "../../organisms/main/contentlist/Portfolio";
const Content = () => {
  return (
    <Container>
      <Home />
      <About />
      <Portfolio />
    </Container>
  );
};

const Container = styled.div`
  /* width: 1200px; */
    padding-top: 90px;
    margin-left: 190px;
    /* padding-right: 70px; */
    background: #eee;
 
}

`;
export default Content;
