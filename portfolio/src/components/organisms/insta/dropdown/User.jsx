import styled from "styled-components";
import useDropdownClickBody from "../../../../hooks/useDropdownClickBody";
import DropdownList from "../../../data/insta/DropdownList";
import { useState } from "react";

const User = () => {
  const [isShow, setIsShow] = useState(false);
  const element = useDropdownClickBody(() => setIsShow(false));
  return (
    <>
      <Wrapper>
        <ImgUser
          ref={element}
          src="https://cdn1.iconfinder.com/data/icons/flowers-7/128/flower_flowers_blossom-04-256.png"
          onClick={() => setIsShow(!isShow)}
          active={isShow}
        />
        {isShow && (
          <>
            <Dropdown>
              {DropdownList.map(({ id, icon, name }) => (
                <List key={id}>
                  <Icon key={id}>{icon()}</Icon>
                  <Name>{name}</Name>
                </List>
              ))}
              <List>
                <Name>로그아웃</Name>
              </List>
            </Dropdown>
            <SmallBox></SmallBox>
          </>
        )}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 25px;
  height: 25px;
`;
const ImgUser = styled.img`
  width: 23px;
  height: 23px;
  border-radius: 50%;
  cursor: pointer;
  border: ${({ active }) => active && "1px solid"};
`;
const Dropdown = styled.div`
  width: 230px;
  border-radius: 8px;
  background: #fff;
  position: absolute;
  top: 39px;
  right: -37px;
  border: 1px solid #ddd;
`;
const List = styled.div`
  box-sizing: border-box;
  display: flex;
  height: 37px;
  padding: 8px 16px;
  align-items: center;
  &:last-of-type {
    border-top: 1px solid #ddd;
  }
`;
const Icon = styled.div`
  width: 16px;
  height: 16px;
  margin-right: 14px;
`;
const Name = styled.div`
  flex: 1;
  font-size: 14px;
`;
const SmallBox = styled.div`
  position: absolute;
  bottom: -19px;
  left: 25%;
  width: 14px;
  height: 14px;
  background: #fff;
  transform: rotate(45deg);
  border-top: 1px solid #ddd;
  border-left: 1px solid #ddd;
`;
export default User;
