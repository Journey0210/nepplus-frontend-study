import styled from "styled-components";
import Home from "../../molcules/main/contentlist/Home";
import About from "../../molcules/main/contentlist/About";
import Portfolio from "../../molcules/main/contentlist/Portfolio";
const Content = () => {
  return (
    <Container>
      <Home />
      {/* <About /> */}
      <Portfolio />
    </Container>
  );
};

const Container = styled.div`
  /* width: 1200px; */
    padding-top: 100px;
    margin-left: 190px;
    /* padding-right: 70px; */
    background: white;
}

`;
export default Content;
