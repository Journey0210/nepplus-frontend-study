import styled from "styled-components";
import commentList from "../../../data/youtube/youtubewatch/commentList";
import { ReactComponent as Like } from "../../../../assets/images/youtube/Like.svg";
import { ReactComponent as UnLike } from "../../../../assets/images/youtube/UnLike.svg";
const CommentList = () => {
  return (
    <>
      {commentList.map(({ id, channel, like, comment }) => (
        <List key={id}>
          <Left>
            <ThumbNailWrapper>
              <ThumbNail src={channel.thumbnail} />
            </ThumbNailWrapper>
          </Left>
          <Right>
            <Info>
              <Name>{channel.name}</Name>
              <Date>{channel.date}전</Date>
            </Info>
            <CommentContent>{comment}</CommentContent>
            <Buttons>
              <LikeWrapper>
                <IconWrapper>
                  <Like />
                </IconWrapper>
                <Count>{like}</Count>
              </LikeWrapper>
              <UnLikeWrapper>
                <IconWrapper>
                  <UnLike />
                </IconWrapper>
              </UnLikeWrapper>
              <IconWrapper></IconWrapper>
            </Buttons>
          </Right>
        </List>
      ))}
    </>
  );
};
const List = styled.div`
  display: flex;
  margin-bottom: 15px;
`;
const Left = styled.div``;
const Right = styled.div``;
const Info = styled.div`
  margin-bottom: 5px;
  display: flex;
  align-items: center;
`;
const Name = styled.span`
  font-size: 13px;
`;
const Date = styled.p`
  font-size: 12px;
  color: #606060;
  margin: 0;
  margin-left: 6px;
`;
const CommentContent = styled.p`
  margin: 0;
  font-size: 14px;
`;
const Buttons = styled.div`
  margin: 15px 0;
  display: flex;
`;
const IconWrapper = styled.div`
  width: 16px;
  height: 16px;
  margin-right: 7px;
`;
const LikeWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Count = styled.span`
  font-size: 12px;
  color: #606060;
`;
const UnLikeWrapper = styled.div`
  margin-left: 15px;
  display: flex;
  align-items: center;
`;
const ThumbNailWrapper = styled.div`
  margin-right: 15px;
`;
const ThumbNail = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 50%;
`;
export default CommentList;
