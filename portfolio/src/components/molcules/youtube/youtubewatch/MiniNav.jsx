import styled from "styled-components";
import { useState } from "react";
import miniNavButtonList from "../../../data/youtube/youtubewatch/miniNavButtonList";

const MiniNav = () => {
  const [active, setActive] = useState(1);
  const handleClick = (id) => {
    setActive(id);
  };

  return (
    <Wrapper>
      {miniNavButtonList.map(({ text, id }) => (
        <Button key={id} onClick={() => handleClick(id)} active={active === id}>
          {text}
        </Button>
      ))}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
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
  :hover {
    background: #eee;
  }
`;

export default MiniNav;
