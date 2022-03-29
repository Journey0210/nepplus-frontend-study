import styled from "styled-components";
import useDropdownClickBody from "../../../../hooks/useDropdownClickBody";
import { useState } from "react";
import { ReactComponent as UnActivedFeed } from "../../../../assets/images/insta/Feed.svg";
import { ReactComponent as ActivedFeed } from "../../../../assets/images/insta/activedFeed.svg";
import { ReactComponent as ArrowRight } from "../../../../assets/images/insta/arrowRight.svg";

const Feed = ({ active, onToggle }) => {
  const element = useDropdownClickBody(() => onToggle(false));

  const handleClick = () => {
    onToggle(!active);
  };
  return (
    <>
      <Wrapper>
        <Icon ref={element} onClick={handleClick}>
          <ActivedFeed style={{ display: !active && "none" }} />
          <UnActivedFeed style={{ display: active && "none" }} />
        </Icon>
        {active && (
          <>
            <DrowpdownBox>
              <List>
                <UserInfo>
                  <UserProfile src="https://cdn3.iconfinder.com/data/icons/nature-37/120/aeaaqqas-256.png" />
                  <Section>
                    <Text>팔로우 요청</Text>
                    <UserName>rosie235</UserName>
                  </Section>
                </UserInfo>
                <UserState>
                  <Online></Online>
                  <IconWrapper>
                    <ArrowRight />
                  </IconWrapper>
                </UserState>
              </List>
            </DrowpdownBox>
            <SmallBox></SmallBox>
          </>
        )}
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  position: relative;
`;
const Icon = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 20px;
  cursor: pointer;
`;
const DrowpdownBox = styled.div`
  width: 500px;
  height: 362px;
  border-radius: 8px;
  background: #fff;
  position: absolute;
  top: 42px;
  right: -39px;
  border: 1px solid #ddd;
`;
const SmallBox = styled.div`
  position: absolute;
  bottom: -25px;
  left: 16%;
  width: 14px;
  height: 14px;
  background: #fff;
  transform: rotate(45deg);
  border-top: 1px solid #ddd;
  border-left: 1px solid #ddd;
`;

const List = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 68px;
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
`;
const UserInfo = styled.div`
  display: flex;
`;
const UserProfile = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  margin-right: 15px;
`;
const Section = styled.div``;
const Text = styled.p`
  margin: 0;
  color: #262626;
  font-weight: 600;
  font-size: 14px;
`;
const UserName = styled.p`
  margin: 0;
  color: #8e8e8e;
  font-weight: 400;
  font-size: 14px;
`;
const UserState = styled.div`
  display: flex;
`;
const IconWrapper = styled.div`
  transform: rotate(90deg);
`;
const Online = styled.div`
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background-color: #0095f6;
  margin: 12px;
`;
export default Feed;
