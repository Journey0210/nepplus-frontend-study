import styled from "styled-components";
import { useState, useEffect } from "react";
const ScrollDown = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const move = setInterval(() => {
      setActive(!active);
    }, 500);
    return () => {
      clearInterval(move, 500);
    };
  }, [active]);

  return (
    <Container active={active}>
      <span>Scroll down</span>
      <ArrowDown src="https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/arrow-down-256.png" />
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  bottom: 30px;
  right: 40px;
  display: flex;
  justify-content: center;
  height: 100px;
  align-items: center;
  span {
    font-size: 27px;
    color: #fff;
    font-family: "BalooThambi2-VariableFont_wght";
  }

  transform: ${(props) => props.active && "translateY(30px)"};
`;

const ArrowDown = styled.img`
  width: 43px;
  height: 43px;
  margin-left: 15px;
`;
export default ScrollDown;
