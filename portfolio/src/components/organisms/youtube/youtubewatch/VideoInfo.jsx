import PrimaryInfo from "../../../molcules/youtube/youtubewatch/PrimaryInfo";
import SecondaryInfo from "../../../molcules/youtube/youtubewatch/SecondaryInfo";

const VideoInfo = ({ video }) => {
  const { title, hit, createAt, channel } = video;

  return (
    <>
      <PrimaryInfo title={title} hit={hit} createAt={createAt} />
      <SecondaryInfo thumbnail={channel.thumbnail} name={channel.name} />
    </>
  );
};

export default VideoInfo;
