import styled from "styled-components";
import { firstList } from "../../../data/youtube/sidebar";
import SidebarItem from "../../../molcules/youtube/SidebarItem";
import { DropdownWrapper } from "../../../atoms";
import { useState } from "react";
import useDropdownClickBody from "../../../../hooks/useDropdownClickBody";

const DropdownUser = () => {
  const [isShow, setIsShow] = useState(false);

  const element = useDropdownClickBody(() => setIsShow(false));
  console.log(isShow);
  return (
    <>
      <Icon ref={element} onClick={() => setIsShow((prev) => !prev)}>
        <ImgUser src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-256.png" />
      </Icon>
      <DropdownWrapper>
        {isShow && (
          <List>
            kmklmklm
            <Item>
              <Info>
                <UserId>d</UserId>
                <Manage>d</Manage>
              </Info>
            </Item>
            {firstList.map(({ name, icon }) => (
              <SidebarItem key={name} name={name} icon={icon} />
            ))}
          </List>
        )}
      </DropdownWrapper>
    </>
  );
};
const List = styled.div`
  background: #fff;
  width: 216px;
  position: absolute;
  right: 10px;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
`;
const Icon = styled.div`
  cursor: pointer;
  margin: 12px;
`;
const ImgUser = styled.img`
  width: 33px;
  height: 33px;
`;
const Item = styled.div``;
const Info = styled.div``;
const UserId = styled.h3``;
const Manage = styled.span``;

export default DropdownUser;
