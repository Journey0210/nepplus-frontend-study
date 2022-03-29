import styled from "styled-components";
import { useEffect, useState } from "react";
import { HeaderList } from "../../data/main/HeaderList";
const Header = ({ themeToggler }) => {
  const [active, setActive] = useState(1);
  const [themeDark, setThemeDark] = useState(false);

  const handleClick = (id, location) => {
    setActive(id);
    window.scrollTo({ top: location, behavior: "smooth" });
  };

  const handleTheme = () => {
    themeToggler();
    setThemeDark(!themeDark);
  };

  return (
    <Container>
      <Left>
        <Item>
          <span>RootCho</span>
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
        <Item onClick={handleTheme}>
          <Img
            src={
              themeDark 
                ? "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_3-256.png"
                :"https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/moon-256.png"
            }
          />
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
  background: ${(props) => props.theme.body} !important;
  color: ${(props) => props.theme.fontColor} !important;
  z-index: 1;
`;

const Left = styled.div`
  margin-left: 40px;
  span {
    font-size: 23px; 
    font-family: "NanumMyeongjo-Regular";
    /* font-weight:600; */
  }
`;

const Right = styled.div`
  display: flex;
  margin-right: 40px;
`;
const Item = styled.div`
  margin: 0 15px;
`;
const Name = styled.span`
  font-size: 21px;
  font-weight:600;
  font-family: "NanumMyeongjo-Regular";
  color: ${(props) => props.active && "gray"};
  cursor: pointer;
  :hover {
    color: gray;
  }
`;
const Img = styled.img`
  width: 28px;
  height: 28px;
  cursor: pointer;
`;
export default Header;
