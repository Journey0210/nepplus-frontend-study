import styled from "styled-components";
import Home from "../main/contentlist/Home"
import About from "../main/contentlist/About"
const Content = ()=>{
    return<Container>
    <Home/>
    <About/>
    </Container>
}

const Container = styled.div`
  /* width: 1200px; */
 
  margin-top:70px;
  margin-left:190px;
  margin-right:150px;
`
export default Content;