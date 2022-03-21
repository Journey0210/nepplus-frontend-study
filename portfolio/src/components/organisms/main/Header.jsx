import styled from "styled-components";
import { useState } from "react";
import { HeaderList } from "../../data/main/HeaderList";
const Header = () => {
  const [active, setActive] = useState(1);

  const handleClick = (id, location) => {
    setActive(id);
    window.scrollTo({ top: location, behavior: "smooth" });
  };
  return (
    <Container>
      <Left>
        <Item>
          <span>HYEJIN</span>
          <ImgLogo src="https://cdn3.iconfinder.com/data/icons/spring-23/32/leaf-spring-plant-ecology-green-256.png"/>
        </Item>
      </Left>
      <Right>
        {HeaderList.map(({ id, name, location }) => (
          <Item key={id}>
            <Name
              onClick={() => handleClick(id, location)}
              active={active === id}
            >
              {name}
            </Name>
          </Item>
        ))}
        <Item>
          <Img src="https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/moon-256.png" />
        </Item>
      </Right>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  position: fixed;
  top: 0;
  width: 100vw;
  background: #fff;
  z-index: 1;
  /* border-bottom: 1px solid #ddd; */
`;

const Left = styled.div`
  margin-left: 40px;
  span {
    font-size: 23px;
    font-weight: 600;
    font-family: "BalooThambi2-VariableFont_wght";
  }
`;

const ImgLogo =styled.img`
width:35px;
height:35px;
`
const Right = styled.div`
  display: flex;
  margin-right: 40px;
`;
const Item = styled.div`
  margin: 0 15px;
`;
const Name = styled.span`
  font-size: 23px;
  font-weight: 600;
  font-family: "BalooThambi2-VariableFont_wght";
  color: ${(props) => (props.active ? "#7cb342" : "black")};
  cursor: pointer;
  :hover {
    color: #7cb342;
  }
`;
const Img = styled.img`
  width: 28px;
  height: 28px;
  cursor: pointer;
`;
export default Header;
