import styled from "styled-components";
import Home from "./contentlist/Home";
import About from "./contentlist/About";
import Skills from "./contentlist/Skills";
import Portfolio from "../../organisms/main/contentlist/Portfolio";
const Content = () => {
  return (
    <Container>
      <Home />
      <About />
      <Portfolio />
      <Skills/>
    </Container>
  );
};

const Container = styled.div`
  /* width: 1200px; */
    padding-top: 90px;
  
    /* background:#fff; */
 
}

`;
export default Content;
