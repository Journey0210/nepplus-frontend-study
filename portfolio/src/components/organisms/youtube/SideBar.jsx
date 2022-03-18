import SidebarItem from "../../molcules/youtube/SidebarItem";
import styled from "styled-components";
import {
  firstList,
  secondList,
  thirdList,
  fourthList,
  fifthList,
} from "../../data/sidebar";
import Information from "../../molcules/youtube/Information";

const SideBar = () => {
  return (
    <>
      <Container>
        <List>
          {firstList.map(({ name, icon }) => (
            <SidebarItem key={name} name={name} icon={icon} />
          ))}
        </List>
        <List>
          {secondList.map(({ name, icon }) => (
            <SidebarItem key={name} name={name} icon={icon} />
          ))}
        </List>
        <List>
          <Title>구독</Title>
          {thirdList.map(({ name, icon }) => (
            <SidebarItem key={name} name={name} icon={icon} />
          ))}
        </List>
        <List>
          <Title>YOUTUBE 더보기</Title>
          {fourthList.map(({ name, icon }) => (
            <SidebarItem key={name} name={name} icon={icon} />
          ))}
        </List>
        <List>
          {fifthList.map(({ name, icon }) => (
            <SidebarItem key={name} name={name} icon={icon} />
          ))}
        </List>
        <Information />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 240px;
  height: calc(100vh - 56px);
  position: fixed;
  top: 56px;
  border-bottom: 1px solid;
  //스크롤바 생성
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: gray;
    height: 50px;
  }
`;

const List = styled.div`
  border-bottom: 1px solid #eee;
  padding: 12px 0;
`;

const Title = styled.div`
  padding: 8px 24px;
  font-size: 14px;
  color: #606060;
`;

export default SideBar;
