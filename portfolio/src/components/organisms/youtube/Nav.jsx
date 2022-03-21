import { useState } from "react";
import styled from "styled-components";
import { navButtonList } from "../../data/youtube/navButtonList";

const Nav = () => {
  const [active, setActive] = useState(1);
  const handleClick = (id) => {
    setActive(id);
  };

  return (
    <Wrapper>
      {navButtonList.map(({ text, id }) => (
        <Button key={id} onClick={() => handleClick(id)} active={active === id}>
          {text}
        </Button>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 56px;
  min-width: 100vw;
  display: flex;
  align-items: center;
  background: #fff;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
`;
const Button = styled.button`
  border-radius: 25px;
  border: 1px solid #ccc;
  padding: 4px 12px;
  line-height: 1.5;
  margin: 7px;
  font-size: 14px;
  background: ${({ active }) => (active ? "black" : "#f2f2f2")};
  color: ${({ active }) => (active ? "#fff" : "black")};
  white-space: nowrap;
  cursor: pointer;
`;
export default Nav;
