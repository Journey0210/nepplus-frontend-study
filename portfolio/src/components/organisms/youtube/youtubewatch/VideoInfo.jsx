import PrimaryInfo from "../../../molecules/youtube/youtubewatch/PrimaryInfo";
import SecondaryInfo from "../../../molecules/youtube/youtubewatch/SecondaryInfo";

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
