import { useState } from "react";
import styled from "styled-components";
import { SecondDropdownList } from "../../../data/youtube/dropdownList";
import SidebarItem from "../../../molecules/youtube/SidebarItem";
import { ReactComponent as Apps } from "../../../../assets/images/youtube/Apps.svg";
import { DropdownWrapper } from "../../../atoms";
import useDropdownClickBody from "../../../../hooks/useDropdownClickBody";
const DropdownApps = () => {
  const [isShow, setIsShow] = useState(false);
  const element = useDropdownClickBody(() => setIsShow(false));
  return (
    <>
      <Icon ref={element} onClick={() => setIsShow((prev) => !prev)}>
        <Apps />
      </Icon>
      <DropdownWrapper>
        {isShow && (
          <List>
            {SecondDropdownList.map(({ name, icon }) => (
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
  top: 28px;
  left: -213px;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
`;

const Icon = styled.div`
  margin: 12px;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
export default DropdownApps;
