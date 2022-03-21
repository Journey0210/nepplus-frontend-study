import { useParams } from "react-router-dom";
import { useState } from "react";
import Header from "../organisms/youtube/Header";
import SideBar from "../organisms/youtube/SideBar";

const YoutubeWatch = () => {
  const [showSideber, setshowSideber] = useState(false);
  const { videoId } = useParams();
  return (
    <div>
      <Header toggleSidebar={() => setshowSideber(!showSideber)} />
      {showSideber && <SideBar />}
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + videoId}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default YoutubeWatch;
