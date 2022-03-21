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
      <Mouse src="https://cdn2.iconfinder.com/data/icons/bitsies/128/Mouse-256.png" />
      <span>Scroll down</span>
      <ArrowDown src="https://cdn4.iconfinder.com/data/icons/developer-set-3/128/arrowdown-128.png" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100px;
  align-items: center;
  span {
    font-size: 20px;
  }

  transform: ${(props) => props.active && "translateY(30px)"};
`;
const Mouse = styled.img`
  width: 43px;
  height: 43px;
`;
const ArrowDown = styled.img`
  width: 18px;
  height: 18px;
  margin: 0 5px;
`;
export default ScrollDown;
