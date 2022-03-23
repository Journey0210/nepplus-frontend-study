import styled from "styled-components";
import { FirstUserDropdownList } from "../../../data/youtube/dropdownList";
import { SecondUserDropdownList } from "../../../data/youtube/dropdownList";
import { DropdownWrapper } from "../../../atoms";
import { useState } from "react";
import useDropdownClickBody from "../../../../hooks/useDropdownClickBody";
import User from "../../../../assets/images/youtube/User.png";

const DropdownUser = () => {
  const [isShow, setIsShow] = useState(false);

  const element = useDropdownClickBody(() => setIsShow(false));
  console.log(isShow);
  return (
    <>
      <Icon ref={element} onClick={() => setIsShow((prev) => !prev)}>
        <ImgUser src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-256.png" />
      </Icon>
      {isShow && (
        <DropdownWrapper>
          <Wrapper>
            <UserAccount>
              <ImageUserWrapper>
                <ImageUser src={User} />
              </ImageUserWrapper>
              <UserInfo>
                <UserId>RootCho</UserId>
                <AccountManage>Google 계정 관리</AccountManage>
              </UserInfo>
            </UserAccount>

            <List>
              {FirstUserDropdownList.map(({ name, icon }) => (
                <Item key={name}>
                  <IconWrapper>{icon()}</IconWrapper>
                  <Name>{name}</Name>
                </Item>
              ))}
            </List>
            <List>
              {SecondUserDropdownList.map(({ name, icon }) => (
                <Item key={name}>
                  <IconWrapper>{icon()}</IconWrapper>
                  <Name>{name}</Name>
                </Item>
              ))}
            </List>
            <List>
              <Item>
                <Name>제한모드:사용 안함</Name>
              </Item>
            </List>
          </Wrapper>
        </DropdownWrapper>
      )}
    </>
  );
};
const Wrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 20px;
`;
const ImageUserWrapper = styled.div`
  margin: 14px;
`;
const UserAccount = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  width: 298px;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
`;
const ImageUser = styled.img``;
const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const UserId = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #030303;
`;
const AccountManage = styled.span`
  font-size: 14px;
  color: #065fd4;
  font-weight: 400;
  display: inline-block;
  margin: 8px 0;
`;
const List = styled.div`
  background: #fff;
  width: 298px;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 8px 0;
`;

const Item = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 23px;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
const IconWrapper = styled.div`
  margin-right: 24px;
  width: 24px;
  height: 24px;
`;
const Name = styled.span`
  flex: 1;
  line-height: 2;
  display: inline-block;
  max-width: 180px;
  font-size: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Icon = styled.div`
  cursor: pointer;
  margin: 12px;
`;
const ImgUser = styled.img`
  width: 33px;
  height: 33px;
`;

export default DropdownUser;
