import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "../../atoms/main/button";
import toDoList from "../../../assets/images/main/todolist.png"

const Portfolio3 = ()=>{
    return <Wrapper>
    <Left>
        <ImagePortfolio src={toDoList}/>
    <Link to="/todo" target="_blank" rel="noopener noreferrer">
    <Button>View</Button>  
    </Link>
    </Left>
    <Right>
        <Header>To Do List(일정 관리)</Header>
        <Content>
        <b>사용 기술</b>: React.js<br/>
        <p>create-react-app</p> 
        <p>styled-components</p>
        <b>구현 기능</b>:
        <ul>
            <li><b>전체완료, 전체완료 해제, 전체반전, 전체삭제 기능을 추가했습니다.</b><br/>
            → spread 연산자로 기존 일정 리스트 데이터를 복사한 뒤 useState의 setter함수로 checked 속성 값만 변경된 새로운 데이터 배열이 업데이트 되도록 했습니다. 
              전체완료의 경우 checked 속성 값을 모두 true로, 전체완료 해제의 경우 모두 false로, 전체반전은 기존 속성 값의 반대(!checked)로 변경되도록 했습니다. 전체삭제의 경우 setter함수에 빈 배열을 넣어주었습니다.
            </li>
            <li><b>완료한 일정에는 취소선과 배경색 변화를 주어 완료한 일정과 남은 일정이 쉽게 구분되도록 구현했습니다.</b><br/>
            →styled-components의 props를 이용해 checked 속성 값이 true일 때만 취소선이 생기고 배경색이 바뀌도록 조건부 스타일링을 주었습니다.   
            </li>
            <li>
            <b>완료한 일정의 비율을 계산하여 오늘 할 일의 달성률이 보여지도록 했습니다.</b><br/>
             →filter() 함수를 사용해 일정 리스트에 checked속성 값이 true인 일정만 담는 배열을 만들어, 그 배열의 길이(length)가 전체 일정 리스트 배열의 길이(length)에서 차지하는 비율을 계산했습니다. 그리고 Math.round()함수를 사용해 소수점을 반올림해주었습니다. 
            </li>
        </ul>
        </Content>
    </Right>
    </Wrapper>
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
const ImagePortfolio = styled.img`
width: 500px; 
height:400px;
border:1px solid #ddd;
border-radius:10px;
margin-top: 50px;
margin-right: 40px;
margin-bottom: 50px;
`
const Right = styled.div`
color: ${(props) => props.theme.fontColor}; 
`
const Header = styled.h2``

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

li+li{
    margin-top:10px;
}
`
export default Portfolio3;