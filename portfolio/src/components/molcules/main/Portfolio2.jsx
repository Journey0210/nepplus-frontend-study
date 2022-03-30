import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "../../atoms/main/button";
import Instagram from "../../../assets/images/main/Instagram.png"
import {ReactComponent as NewPost } from "../../../assets/images/insta/NewPost.svg"

const Portfolio2 = ()=>{
    return <>
    <Wrapper>
        <Left>
    <ImagePortfolio src={Instagram}/>  
    <Link to="/insta/login" target="_blank" rel="noopener noreferrer">
    <Button>View</Button>
    </Link>
    </Left>
    <Right>
        <Header>인스타그램 클론 코딩</Header>
        <Content>
        
        <b>사용 기술</b>: React.js<br/>
        <p>create-react-app</p> 
        <p>styled-components</p>
        <p>react-router-dom</p>
        <b>구현 기능</b>:
        <ul>       
        <li>로그인 페이지에서 일정 시간이 지나면 이미지가 자동으로 변화하는 carousel을 만들었습니다.<br/> 
         → setInterval 함수를 사용해 4초 간격으로 이미지가 index에 따라 순차적으로 바뀌도록 했고,  
        이를 useEffect로 감싸 컴포넌트가 재렌더링 될 때 실행시킬 cleanup함수를 추가했습니다.<br/> 
        </li>
        <li>nav 버튼을 통해 다른 페이지로 이동할 때에도, 상단에 nav가 고정되어 있도록 했습니다.<br/> 
        →  nav 컴포넌트에 중첩라우팅을 구성하고, react router dom의 Outlet을 사용했습니다.<br/> 
        </li>
        <li> nav에서 새 게시물 추가 버튼<NewPost/> 클릭시, modal창이 열린 상태에서는 스크롤 바가 움직이지 않도록 했습니다.<br/> 
        →  모달창이 열렸을 때 화면이 스크롤이 되지 않도록 body 전체에  overflow = "hidden"을 주었고, 
        modal창이 사라지면 위 기능을 제거되도록 했습니다.<br/> 
        </li>
        <li>새 게시물을 추가하는 모달창에서, 내 컴퓨터에 있는 이미지 파일을 불러와 화면에서 미리보기를 할 수 있도록 했습니다.<br/> 
        →  file 타입의 input 태그에 onChange 이벤트 핸들러를 붙여 파일을 선택할 때마다 콜백 함수를 실행시키도록 한 뒤,
         FileReader 객체를 사용해 readAsDataURL()로 이미지 파일을 읽게하고, onload가 끝났을 때 그 결과를 화면에 렌더링 되도록 했습니다.  
        </li>
        <li>메인페이지에서 스크롤을 내려도 추천 계정을 보여주는 사이드바가 우측에 고정되어 있도록 했습니다.<br/> 
        →  sidebar에 position : sticky를 주어 top: 120px까지는 static상태처럼 있다가 120px이후부터는 fixed상태로 변하도록 했습니다.<br/> 
        </li>
        </ul>
        </Content>
        
   
    </Right>  
    </Wrapper>
    </>
}
const Wrapper = styled.div`
display:flex;
margin: 30px 70px;
`
const Left = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const Right = styled.div``
const Header = styled.h2``
const ImagePortfolio = styled.img`
width: 500px; 
height:400px;
border:1px solid #ddd;
border-radius:10px;
margin-right: 20px;
margin-bottom: 50px;
`
const Content = styled.div`
font-size: 17px;
line-height: 1.8;
p{
    text-indent: 80px;
    margin:0;
}
ul{
    margin:0;
}
`

export default Portfolio2;