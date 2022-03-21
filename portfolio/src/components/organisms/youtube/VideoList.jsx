import styled from "styled-components";
import { Link } from "react-router-dom";

const VideoList = ({ data }) => {
  return (
    <List>
      {data.map(({ id, thumbnail, title, channel, hit, createAt, videoId }) => (
        <Item key={id}>
          <Link to={`/youtube/${videoId}`}>
            <ThumbNail src={thumbnail} />
          </Link>
          <InfoWrapper>
            <ChannelImage src={channel.thumbnail} />
            <Info>
              <Link to={`/youtube/${videoId}`}>
                <VideoTitle>{title}</VideoTitle>
              </Link>
              <ChennelName>{channel.name}</ChennelName>
              <MetaData>
                조회수{hit}회 • {createAt}
              </MetaData>
            </Info>
          </InfoWrapper>
        </Item>
      ))}
    </List>
  );
};

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
  margin: 20px;
  margin-top:142px;
  z-index:-1;
  
 
  @media screen and (max-width: 1300px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
  
`;
const Item = styled.div``;
const ThumbNail = styled.img`
  width: 100%;
`;
const ChannelImage = styled.img`
  margin-top: 10px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;
const InfoWrapper = styled.div`
  display: flex;
`;

const Info = styled.div`
  margin: 10px;
`;

const VideoTitle = styled.h5`
  margin: 0;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 500;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: black;
`;
const ChennelName = styled.h5`
  margin: 0;
  font-weight: 500;
  font-size: 14px;
  color: #606060;
`;
const MetaData = styled.div`
  font-size: 14px;
  color: #606060;
`;

export default VideoList;
