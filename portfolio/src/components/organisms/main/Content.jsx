import styled from "styled-components";
import Home from "../main/contentlist/Home";
import About from "../main/contentlist/About";
const Content = () => {
  return (
    <Container>
      <Home />
      <About />
    </Container>
  );
};

const Container = styled.div`
  /* width: 1200px; */
    padding-top: 148px;
    margin-left: 190px;
    padding-right: 70px;
    background: white;
}

`;
export default Content;
