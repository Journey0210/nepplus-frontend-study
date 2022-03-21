import styled from "styled-components";
import { firstDropdownList } from "../../../data/youtube/dropdownList";
import SidebarItem from "../../../molcules/youtube/SidebarItem";
import { DropdownWrapper } from "../../../atoms";
import { ReactComponent as Video } from "../../../../assets/images/youtube/Video.svg";
import { useState } from "react";
import useDropdownClickBody from "../../../../hooks/useDropdownClickBody";

const DropdownCamera = () => {
  const [isShow, setIshow] = useState(false);
  const element = useDropdownClickBody(() => setIshow(false));
  return (
    <>
      <Icon ref={element} onClick={() => setIshow((prev) => !prev)}>
        <Video />
      </Icon>
      <DropdownWrapper>
        {isShow && (
          <List>
            {firstDropdownList.map(({ name, icon }) => (
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
  width: 230px;
  position: absolute;
  top: 24px;
  left: -47px;
  padding: 10px 0;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  overflow: hidden;
`;

const Icon = styled.div`
  margin: 12px;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
export default DropdownCamera;
