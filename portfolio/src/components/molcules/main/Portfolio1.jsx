import styled from "styled-components";
import { Link } from "react-router-dom"
import { Button } from "../../atoms/main/button";
import youtube from "../../../assets/images/main/youtube.png"

const Portfolio1 = ()=>{
    return <>
   <Wrapper>
      <Left>
        <ImagePortfolio src={youtube}/>  
        <Link to="/youtube" target="_blank" rel="noopener noreferrer">
          <Button>View</Button>
        </Link>     
      </Left>
      <Right>
        <Header>유튜브 클론 코딩</Header>
        <Content>
        <b>사용 기술 :</b> React.js<br/>
        <p>create-react-app</p> 
        <p>styled-components</p>
        {/* (자바스크립트 ES6문법을 사용해 컴포넌트의 props를 이용한 스타일링이 가능) */}
        <p>react-router-dom</p>
        {/* (사용자가 요청한 URL에 따라 해당 URL에 맞는 데이터를 하나의 페이지에서 렌더링 해주는 라이브러리) */}
        <b>구현 기능</b>: 
        <ul>
        <li>dropdown 버튼 외의 body부분을 클릭했을 때에도 dropdown 메뉴가 닫히도록 했습니다.<br/>
        → useRef를 사용해 dropdown 버튼이 이벤트 타겟을 포함하지 않을 때 dropdown 메뉴가 닫히는 함수를 
         document.body.addEventListener의 콜백함수로 실행시키는 custom hook을 만들어, 각 dropdown 버튼에서 사용했습니다.
        </li>
        <li>
         동영상 썸네일 또는 제목을 클릭하면 url 경로가 바뀌면서 해당 동영상과 정보가 나오는 페이지로 이동하는 것처럼 구현했습니다.<br/>
         → url parameter에 영상의 고유 번호를 넣는 동적 라우팅(Dynamic Routing)을 구성하고, 
         useParams로 영상의 고유 번호를 가져와 이를 유튜브 홈페이지에서 복사해온 iframe 태그 주소에 연결하여 해당 영상이 화면에 보여지도록 했습니다.
         또한 영상 정보에 대한 mock data를 만들어 find() 함수로 영상 고유 번호와 일치하는 데이터를 가져와 영상의 부수적인 정보(제목, 채널, 업로드 날짜 등)도 함께 화면에 나타나도록 했습니다.  
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
export default Portfolio1;