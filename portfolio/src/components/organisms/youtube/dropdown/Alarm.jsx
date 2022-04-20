import styled from "styled-components";
import { ReactComponent as ImgAlarm } from "../../../../assets/images/youtube/Alarm.svg";
import { ReactComponent as ImgSetting } from "../../../../assets/images/youtube/Setting.svg";
import { DropdownWrapper } from "../../../atoms";
import { useState } from "react";
import { ReactComponent as Alarm } from "../../../../assets/images/youtube/Alarm.svg";
import useDropdownClickBody from "../../../../hooks/useDropdownClickBody";

const DropdownAlarm = () => {
  const [isShow, setIsShow] = useState(false);
  const element = useDropdownClickBody(() => setIsShow(false));
  return (
    <>
      <Icon ref={element} onClick={() => setIsShow((prev) => !prev)}>
        <Alarm />
      </Icon>
      <DropdownWrapper>
        {isShow && (
          <Wrapper>
            <Header>
              <Text>알림</Text>
              <ImgSettingWrapper>
                <ImgSetting />
              </ImgSettingWrapper>
            </Header>
            <Body>
              <ImgAlarmWrapper>
                <ImgAlarm />
              </ImgAlarmWrapper>
              <TextWrapper>
                <Text>여기에 알림이 표시됩니다.</Text>
                <Text>
                  즐겨찾는 채널을 구독하여 최신 동영상의 알림을 받아 보세요
                </Text>
              </TextWrapper>
            </Body>
          </Wrapper>
        )}
      </DropdownWrapper>
    </>
  );
};
const Wrapper = styled.div`
  width: 480px;
  background: #ffffff;
  position: absolute;
  right: 1px;
  top: 29px;
`;

const Icon = styled.div`
  margin: 12px;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 0 15px;
`;
const TextWrapper = styled.div`
  width: 280px;
`;
const Text = styled.p`
  text-align: center;
  color: gray;
`;
const ImgSettingWrapper = styled.div`
  width: 24px;
  height: 24px;
`;
const Body = styled.div`
  height: 574px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ImgAlarmWrapper = styled.div`
  width: 120px;
  height: 120px;
  opacity: 0.4;
`;

export default DropdownAlarm;
