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
          src="https://cdn1.iconfinder.com/data/icons/ui-essential-17/32/UI_Essential_Outline_1_essential-app-ui-avatar-profile-user-account-256.png"
          onClick={() => setIsShow(!isShow)}
        />
        {isShow && (
          <>
            <Drowpdown>
              {DropdownList.map(({ id, icon, name }) => (
                <List key={id}>
                  <Icon key={id}>{icon()}</Icon>
                  <Name>{name}</Name>
                </List>
              ))}
              <List>
                <Name>로그아웃</Name>
              </List>
            </Drowpdown>
            <SmallBox></SmallBox>
          </>
        )}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
`;
const ImgUser = styled.img`
  width: 23px;
  height: 23px;
  cursor: pointer;
`;
const Drowpdown = styled.div`
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
