import styled from "styled-components";
import useDropdownClickBody from "../../../../hooks/useDropdownClickBody";
import DropdownList from "../../../data/insta/DropdownList";
import { ReactComponent as Profile } from "../../../../assets/images/insta/profile.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const User = ({ active, onToggle }) => {
  const element = useDropdownClickBody(() => onToggle(false));
  return (
    <>
      <Wrapper>
        <ImgUser
          ref={element}
          src="https://cdn1.iconfinder.com/data/icons/flowers-7/128/flower_flowers_blossom-04-256.png"
          onClick={() => onToggle(!active)}
          active={active}
        />
        {active && (
          <>
            <Dropdown>
              <Link to="/insta/profile/posts">
                <List key="1">
                  <Icon>
                    <Profile />
                  </Icon>
                  <Name>프로필</Name>
                </List>
              </Link>
              {DropdownList.map(({ id, icon, name }) => (
                <List key={id}>
                  <Icon>{icon()}</Icon>
                  <Name>{name}</Name>
                </List>
              ))}
              <Link to="/insta/login">
                <List key="5">
                  <Name>로그아웃</Name>
                </List>
              </Link>
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
  overflow: hidden;
`;
const List = styled.div`
  box-sizing: border-box;
  display: flex;
  height: 37px;
  padding: 8px 16px;
  color: black;
  align-items: center;
  cursor: pointer;
  &:last-of-type {
    border-top: 1px solid #ddd;
  }
  :hover {
    background: #f9f9f9;
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
  bottom: -22px;
  left: 25%;
  width: 14px;
  height: 14px;
  background: #fff;
  transform: rotate(45deg);
  border-top: 1px solid #ddd;
  border-left: 1px solid #ddd;
`;
export default User;
