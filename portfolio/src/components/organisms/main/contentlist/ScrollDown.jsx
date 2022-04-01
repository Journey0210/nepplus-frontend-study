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
      <ArrowDown src="https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/arrow-narrow-left-256.png" />
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
    font-family: "NanumMyeongjo-Regular";
  }

  transform: ${(props) => props.active && "translateY(30px)"};
`;

const ArrowDown = styled.img`
  width: 30px;
  height: 43px;
  transform: rotate(270deg)
`;
export default ScrollDown;
