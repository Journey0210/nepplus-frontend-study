import styled from "styled-components";
import Home from "./contentlist/Home";
import About from "./contentlist/About";
import Skills from "./contentlist/Skills";
import Contact from "./contentlist/Contact";
import Portfolio from "../../organisms/main/contentlist/Portfolio";
const Content = () => {
  return (
    <Container>
      <Home />
      <About />
      <Portfolio />
      <Skills/>
      <Contact/>
    </Container>
  );
};

const Container = styled.div`
    padding-top: 90px;

 
}

`;
export default Content;
