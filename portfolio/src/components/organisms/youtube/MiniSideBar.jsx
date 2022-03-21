import styled from "styled-components";
import { miniSidebarList } from "../../data/youtube/miniSidebar";

const MiniSideBar = () => {
  return (
    <Container>
      {miniSidebarList.map(({ name, icon }) => (
        <List key={name}>
          <Icon>{icon()}</Icon>
          <Name>{name}</Name>
        </List>
      ))}
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  left: 0;
  top: 56px;
  background: white;
  height: 100vh;
`;
const List = styled.div`
  width: 72px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 0 13px;
  cursor: pointer;

  & + & {
    padding-top: 14px;
  }

  :hover {
    background-color: #f0f0f0;
  }
`;
const Icon = styled.div`
  width: 24px;
  height: 24px;
  margin-bottom: 5px;

  &:first-of-type {
    margin-top: 4px;
  }
`;
const Name = styled.span`
  font-size: 10px;
`;

export default MiniSideBar;
