import SidebarItem from "../../molecules/youtube/SidebarItem";
import styled from "styled-components";
import {
  firstList,
  secondList,
  thirdList,
  fourthList,
  fifthList,
} from "../../data/youtube/sidebar";
import Information from "../../molecules/youtube/Information";

const SideBar = () => {
  return (
    <>
      <Container>
        <FirstList>
          {firstList.map(({ name, icon }) => (
            <SidebarItem key={name} name={name} icon={icon} />
          ))}
        </FirstList>
        <SecondList>
          {secondList.map(({ name, icon }) => (
            <SidebarItem key={name} name={name} icon={icon} />
          ))}
        </SecondList>
        <ThirdList>
          <Title>구독</Title>
          {thirdList.map(({ name, icon }) => (
            <SidebarItem key={name} name={name} icon={icon} />
          ))}
        </ThirdList>
        <FourthList>
          <Title>YOUTUBE 더보기</Title>
          {fourthList.map(({ name, icon }) => (
            <SidebarItem key={name} name={name} icon={icon} />
          ))}
        </FourthList>
        <FifthList>
          {fifthList.map(({ name, icon }) => (
            <SidebarItem key={name} name={name} icon={icon} />
          ))}
        </FifthList>
        <Information />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 250px;
  height: calc(100vh - 56px);
  position: fixed;
  top: 56px;
  border-bottom: 1px solid;
  //스크롤바 생성
  overflow-x: hidden;
  background: white;
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 9px;
    background-color: gray;
  }
  z-index:3;
`;

const List = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 12px 0;
`;
const FirstList = styled(List)``
const SecondList = styled(List)``
const ThirdList = styled(List)``
const FourthList = styled(List)``
const FifthList = styled(List)``

const Title = styled.div`
  padding: 8px 24px;
  font-size: 14px;
  color: #606060;
`;

export default SideBar;
