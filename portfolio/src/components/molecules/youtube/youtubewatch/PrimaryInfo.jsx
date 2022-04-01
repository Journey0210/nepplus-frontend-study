import styled from "styled-components";
import primaryInfoButtonList from "../../../data/youtube/youtubewatch/primaryInfoButtonList";
import { ReactComponent as MenuRenderer } from "../../../../assets/images/youtube/MenuRenderer.svg";
const PrimaryInfo = ({ title, hit, createAt }) => {
  return (
    <>
      <Wrapper>
        <TitleWrapper>
          <Title>{title}</Title>
        </TitleWrapper>
        <MetaData>
          <Text>
            조회수 {hit}회• {createAt}
          </Text>
          <ButtonWrapper>
            {primaryInfoButtonList.map(({ id, name, icon }) => (
              <List key={id}>
                <Button>{icon()}</Button>
                <Name>{name}</Name>
              </List>
            ))}
            <List>
              <Button>
                <MenuRenderer />
              </Button>
            </List>
          </ButtonWrapper>
        </MetaData>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  padding: 18px 0 8px;
  border-bottom: 1px solid #ddd;
`;
const TitleWrapper = styled.div``;
const Title = styled.span`
  font-size: 18px;
`;
const MetaData = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  align-items: center;
`;
const Text = styled.span`
  color: #606060;
  font-size: 14px;
`;
const ButtonWrapper = styled.div`
  display: flex;
`;
const List = styled.div`
  display: flex;
  & + & {
    margin-left: 15px;
  }
`;
const Button = styled.div`
  width: 24px;
  height: 24px;
`;
const Name = styled.span`
  margin-left: 5px;
  white-space: nowrap;
`;

export default PrimaryInfo;
