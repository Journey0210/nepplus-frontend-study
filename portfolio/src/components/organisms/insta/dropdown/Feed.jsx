import styled from "styled-components";
import useDropdownClickBody from "../../../../hooks/useDropdownClickBody";
import { useState } from "react";
import { ReactComponent as UnActivedFeed } from "../../../../assets/images/insta/Feed.svg";
import { ReactComponent as ActivedFeed } from "../../../../assets/images/insta/activedFeed.svg";

const Feed = () => {
  const [isShow, setIsShow] = useState(false);

  const element = useDropdownClickBody(() => setIsShow(false));

  const handleClick = () => {
    setIsShow(!isShow);
  };
  return (
    <>
      <Wrapper>
        <Icon ref={element} onClick={handleClick}>
          <ActivedFeed style={{ display: !isShow && "none" }} />
          <UnActivedFeed style={{ display: isShow && "none" }} />
        </Icon>
        {isShow && (
          <>
            <DrowpdownBox></DrowpdownBox>
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
  right: -25px;
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
export default Feed;
