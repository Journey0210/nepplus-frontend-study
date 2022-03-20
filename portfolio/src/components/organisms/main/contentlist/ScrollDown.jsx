import styled from "styled-components";
import { useState, useEffect } from "react";   
const ScrollDown = ()=>{
   const [active,setActive]=useState(false)

      useEffect(() => { 
      const move = setInterval(()=>{
        setActive(!active)
       },500)
       return ()=>{
        clearInterval(move,500)
       }
    },[active])
    return(
    <Container active={active}>           
    <Mouse src="https://cdn1.iconfinder.com/data/icons/unicons-line-vol-5/24/mouse-alt-256.png"/>
    <span>Scroll down</span>
    <ArrowDown src="https://cdn4.iconfinder.com/data/icons/developer-set-3/128/arrowdown-128.png"/>              
</Container>
)
}

const Container = styled.div`
display: flex;
justify-content: center;
height: 60px;
align-items:center;
 span{
    font-size:18px;
}

transform: ${(props)=>props.active&&"translateY(30px)"}
`
const Mouse = styled.img`
width: 40px;
height: 40px;
`
const ArrowDown = styled.img`
width: 15px;
height: 15px;
margin:0 3px;
`
export default ScrollDown;