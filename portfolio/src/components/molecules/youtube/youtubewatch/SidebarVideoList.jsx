import styled from "styled-components";
import { sidebarVideolist } from "../../../data/youtube/youtubewatch/sidebarVideolist";

const SidebarVideoList = () => {
  return (
    <Wrapper>
      {sidebarVideolist.map(
        ({ id, title, thumbnail, chennelname, hit, createAt }) => (
          <List key={id}>
            <ThumbNail src={thumbnail} />
            <Info>
              <Title>{title}</Title>
              <ChannelName>{chennelname}</ChannelName>
              <MetaData>
                조회수{hit}회• {createAt}
              </MetaData>
            </Info>
          </List>
        )
      )}
    </Wrapper>
  );
};
const Wrapper = styled.div``;
const List = styled.div`
  margin: 10px;
  height: 94px;
  display: flex;
`;
const ThumbNail = styled.img`
  width: 168px;
`;
const Info = styled.div`
  margin: 0 10px;
`;
const Title = styled.h5`
  font-size: 14px;
  font-weight: 500;
  margin: 0;
  margin-bottom: 7px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
const ChannelName = styled.div`
  font-size: 12px;
`;
const MetaData = styled.span`
  font-size: 12px;
`;

export default SidebarVideoList;
