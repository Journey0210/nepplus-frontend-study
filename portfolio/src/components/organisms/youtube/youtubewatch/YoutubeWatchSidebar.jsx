import styled from "styled-components";
import MiniNav from "../../../molecules/youtube/youtubewatch/MiniNav";

import SidebarVideoList from "../../../molecules/youtube/youtubewatch/SidebarVideoList";
const YoutubeWatchSidebar = () => {
  return (
    <Wrapper>
      <Advertisement></Advertisement>
      <MiniNav />
      <SidebarVideoList />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin-top: 76px;
  margin-left: 20px;
  max-width: 426px;
  margin-right: 50px;
`;
const Advertisement = styled.div``;

export default YoutubeWatchSidebar;
