import Header from "../organisms/youtube/Header";
import Nav from "../organisms/youtube/Nav";
import SideBar from "../organisms/youtube/SideBar";
import MiniSideBar from "../organisms/youtube/MiniSideBar";
import { useState } from "react";
import VideoList from "../organisms/youtube/VideoList";
import styled from "styled-components";
import { videoList } from "../data/youtube/videoList";

const Youtube = () => {
  const [showMini, setShowMini] = useState(false);
  return (
    <>
      <Header toggleSidebar={() => setShowMini((prev) => !prev)} />
      {showMini ? <MiniSideBar /> : <SideBar />}
      <MainWrapper showMini={showMini}>
        <Nav />
        <VideoList data={videoList} />
      </MainWrapper>
    </>
  );
};

const MainWrapper = styled.div`
  margin-left: ${({ showMini }) => (showMini ? "72px" : "250px")};
  overflow: auto;
  position: relative;

`;
export default Youtube;
