import styled from "styled-components";

const SidebarItem = ({ name, icon }) => {
  return (
    <>
      <Item key={name}>
        <IconWrapper>{icon()}</IconWrapper>
        <Name>{name}</Name>
      </Item>
    </>
  );
};

const Item = styled.div`
  height: 40px;
  max-width: 200px;
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
export default SidebarItem;
