import SidebarItem from "../../molcules/youtube/SidebarItem";
import styled from "styled-components";
import {firstList,secondList,thirdList,fourthList,fifthList} from "../../data/youtube/sidebar";
import Information from "../../molcules/youtube/Information";

const SideBar = () => {
  const print = ()=>(
    <svg 
    viewBox="0 0 24 24" 
    preserveAspectRatio="xMidYMid meet" 
    focusable="false" 
    >
    <g><path d="M10,20h4c0,1.1-0.9,2-2,2S10,21.1,10,20z M20,17.35V19H4v-1.65l2-1.88v-5.15c0-2.92,1.56-5.22,4-5.98V3.96 c0-1.42,1.49-2.5,2.99-1.76C13.64,2.52,14,3.23,14,3.96l0,0.39c2.44,0.75,4,3.06,4,5.98v5.15L20,17.35z M19,17.77l-2-1.88v-5.47 c0-2.47-1.19-4.36-3.13-5.1c-1.26-0.53-2.64-0.5-3.84,0.03C8.15,6.11,7,7.99,7,10.42v5.47l-2,1.88V18h14V17.77z" class="style-scope yt-icon"></path></g></svg>
 
 )
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
        {/* <Information /> */}
        <List>
         {print()}
        </List>
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
