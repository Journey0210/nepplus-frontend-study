import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Header from "../organisms/youtube/Header";
import SideBar from "../organisms/youtube/SideBar";
import YoutubeWatchSidebar from "../organisms/youtube/youtubewatch/YoutubeWatchSidebar";
import VideoInfo from "../organisms/youtube/youtubewatch/VideoInfo";
import { videoList } from "../data/youtube/videoList";
import Comment from "../organisms/youtube/youtubewatch/Comment";
const YoutubeWatch = () => {
  const [showSideber, setshowSideber] = useState(false);
  const { videoId } = useParams();

  const video = videoList.find((video) => video.videoId === videoId); //명령형

  return (
    <Container>
      <Header toggleSidebar={() => setshowSideber(!showSideber)} />
      {showSideber && <SideBar />}
      <Main>
        <VideioWrapper>
          <iframe
            src={"https://www.youtube.com/embed/" + videoId}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </VideioWrapper>
        <VideoInfo video={video} />
        <Comment />
      </Main>
      <YoutubeWatchSidebar />
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  min-width: 100vh;
`;

const Main = styled.div`
  width: 100%;
  margin-top: 86px;
  margin-left: 100px;
`;
const VideioWrapper = styled.div`
  width: 100%;
  padding-top: 56%;
  position: relative;
  iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;
export default YoutubeWatch;
