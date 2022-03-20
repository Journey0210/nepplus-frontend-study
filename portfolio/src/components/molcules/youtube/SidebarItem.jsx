import styled from "styled-components";

const SidebarItem = ({ name, icon }) => {

  return (
    <>
      <Item>
        <IconWrapper>{icon()}</IconWrapper>
        <Name>{name}</Name>
      </Item>
    </>
  );
};

const Item = styled.div`
  height: 40px;
  width: 240px;
  display: flex;
  align-items: center;
  padding: 0 24px;
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
  font-size: 14px;
`;
export default SidebarItem;
