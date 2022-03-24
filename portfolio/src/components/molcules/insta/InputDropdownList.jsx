import styled from "styled-components";
import inputDropdownList from "../../data/insta/inputDropdownList"
import {ReactComponent as Close} from "../../../assets/images/insta/close.svg"
const InputDropdownList =()=>{
    return<>
    <Wrapper>
        <TitleWrapper>
            <Title>최근 검색 항목</Title>
            <TextDelete>모두 지우기</TextDelete>
        </TitleWrapper>
        {inputDropdownList.map(({id, user})=>(
            <List>
            <UserInfo>
              <UserProfile src={user.profile} />
              <Section>
                <UserId>{user.id}</UserId>
                <UserName>{user.name}</UserName>
              </Section>
            </UserInfo>
            <IconWrapper><Close/></IconWrapper>
          </List>
        ))}
          

    </Wrapper>
      
    </>
}
const Wrapper = styled.div`
padding-top:12px;
`
const TitleWrapper = styled.div`
display: flex;
justify-content:space-between;
margin: 4px 16px 10px;
`
const Title =styled.span`
color: #262626;
font-size:16px;
font-weight: 600;
`
const TextDelete = styled.span`
color: #0095f6;
font-size: 14px;
font-weight: 600;
`
const List = styled.div`
box-sizing: border-box;
width:375px;
height:60px;
padding:8px 16px;
display: flex;
justify-content:space-between;
align-items: center;


`
const UserInfo = styled.div`
display:flex;

`
const UserProfile = styled.img`
width:44px;
height:44px;
border-radius:50%;
margin-right:15px;
`
const Section = styled.div`
`
const UserId = styled.p`
margin:0;
color: #262626;
font-weight: 600;
font-size: 14px;
`
const UserName = styled.p`
margin:0;
color: #8e8e8e;
font-weight: 400;
font-size: 14px;

`
const IconWrapper = styled.div``
export default InputDropdownList