import styled from "styled-components";
import { useState } from "react"
import { HeaderList } from "../../data/main/HeaderList";
const Header = () => {

 const[active, setActive] = useState(0)

const handleClick =(id)=>{
  setActive(id)
} 
  return (
  <Container>
    <Left>
      <Item >
      <Name>HYEJIN</Name>
      </Item>
    </Left>
    <Right>
      {HeaderList.map(({id,name})=>(
        <Item key ={id}>
          <Name onClick={()=>handleClick(id)} active={active===id}>{name}</Name>
        </Item> 
      ))} 
      <Item>
        <Img src="https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/moon-256.png"/>
      </Item>
    </Right>
  </Container>
  )};

const Container = styled.div`
  display:flex;
  justify-content:space-between;
  align-items: center;
  height: 70px;
  position: fixed;
  top: 0;
  width:100vw;

`
const Left  = styled.div`
 margin-left: 40px;
`
const Right = styled.div`
  display:flex;
  margin-right:40px;
`
const Item = styled.div`
  margin:0 15px;
  
`
const Name = styled.span`
font-size: 18px;
font-weight: 600;
font-family: "BalooThambi2-VariableFont_wght";
color: ${(props)=>props.active ? "#715df2" : "black"};
cursor: pointer;
:hover{
  color: #715df2;
}
`
const Img = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`
export default Header;
