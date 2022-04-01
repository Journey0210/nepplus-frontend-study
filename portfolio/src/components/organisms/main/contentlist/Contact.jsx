import styled from "styled-components";
import arrowUp from "../../../../assets/images/main/arrowUp_icon.svg"
const Contact = () =>{
    return <Container>
       <Header>
          <h1>Contact</h1>
          <span>Find me here</span>
        </Header>
        <Main>
          <List>E-mail 주소: &nbsp; whgpwls210@naver.com</List>
          <List>
              <span>기술 블로그:</span>&nbsp; &nbsp; 
              <a href="https://velog.io/@rootcho" target="_blank" rel="noopener">
              <Icon src="https://cdn1.iconfinder.com/data/icons/social-network-15/512/vimeo-256.png" />
              <span>rootcho.log</span>
              </a>             
          </List>
          <List>
          <span>Github 주소:</span>&nbsp; &nbsp; 
          <a href="https://github.com/RootCho" target="_blank" rel="noopener">
          <Icon src="https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-256.png"/>
          <span>github.com/RootCho</span>
         </a>        
          </List>
        </Main>
        <IconArrow src={arrowUp} onClick={()=> window.scrollTo({top: 0, behavior: "smooth"})}/>
    </Container>
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background: ${(props)=>props.theme.body}; */
  background: #d7ccc87d;
  font-family: "NanumMyeongjo-Regular";
  padding-top:10px;
  padding-bottom:15px;
  padding-left:77px;
  padding-right:77px;
  position:relative;
`;

const Header = styled.div`
  padding-top:30px;
  text-align: center;
  
  h1 {
    font-size: 50px;
    margin: 0;
    color:#fff;
    font-weight: 500;
  }
  span {
    color: gray;
    font-size: 20px;
  }
  margin-bottom: 30px;
`;
const Main = styled.ul`

`
const List = styled.li`
  display: flex;
  font-size:15px;
    a{
      display: flex;
      align-items: center;
    }
  &+&{
      margin-top: 10px;
  }

`
const Icon = styled.img`
width:20px;
height:20px;
margin-right:8px;
`
const IconArrow = styled.img`
position:absolute;
right: 10px;
bottom:10px;
width: 60px;
height:60px;
cursor: pointer;
`
export default Contact;