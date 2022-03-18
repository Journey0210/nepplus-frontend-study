import styled from "styled-components";
import circle from "../../../../assets/images/circle1.png"
import me from "../../../../assets/images/me1.png"
const Home =()=>{
    return<><Container>
        <Left>
            <ItemTop>
                <Title>Hi, I'am Hyejin</Title>
                <Text>Frontend developer</Text>
                <Script>
                I Creates websites using web languages<br/>
                such as HTML, CSS, and JavaScript allow users<br/>
                to access and interact with the site.
                </Script>
                <Button> Thanks for Visiting</Button>
            </ItemTop>
            <ItemBottom>           
                    <Mouse src="https://cdn1.iconfinder.com/data/icons/unicons-line-vol-5/24/mouse-alt-256.png"/>
                    <span>Scroll down</span>
                    <ArrowDown src="https://cdn4.iconfinder.com/data/icons/developer-set-3/128/arrowdown-128.png"/>              
            </ItemBottom>
            
        </Left>
        <Right>
            <Img src={circle}/>
         
            <Me src={me}/>  
      
        </Right>
        </Container></>
}

const Container = styled.div`
margin:0;
display: flex;
align-items: center;
justify-content:center;
font-family: "BalooThambi2-VariableFont_wght";
`
const Left = styled.div`
margin-top:70px;
margin-right: 80px;
height: 600px;
display: flex;
flex-direction: column;
justify-content:space-between;
`
const Right = styled.div`
position:relative;
padding-bottom: 110px;
`

const ItemTop = styled.div`
`
const ItemBottom = styled.div`
display: flex;
align-items:center;
 span{
    font-size:18px;
}
`
const Title = styled.h1`
font-size:65px;
margin-top: 40px;
margin-bottom: 0;
`
const Text = styled.p`
font-size: 30px;
color: gray;
margin: 0;
font-weight: 600;
`
const Script = styled.p`
font-size: 23px;
color: gray;
margin:20px 0;
line-height: 1.5;
`
const Button = styled.button`
width: 200px;
height:60px;
border:none;
border-radius: 10px;
background:#715df2;
color: white;
font-size:20px;
font-family: "BalooThambi2-VariableFont_wght";
margin-top: 14px;
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
const Img = styled.img`
width: 455px;
    height: 400px;
`
const Me = styled.img`
position: absolute;
top: 74px;
    right: 67px;
    width: 310px;
    height: 304px;
border-radius:45%;
`
export default Home;