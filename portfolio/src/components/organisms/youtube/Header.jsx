import styled from "styled-components";
import { ReactComponent as Hamburger } from "../../../assets/images/youtube/Hamburger.svg";
import { ReactComponent as YoutubeLogo } from "../../../assets/images/youtube/YoutubeLogo.svg";
import { ReactComponent as Glass } from "../../../assets/images/youtube/Glass.svg";
import { ReactComponent as Microphone } from "../../../assets/images/youtube/Microphone.svg";
import { ReactComponent as Video } from "../../../assets/images/youtube/Video.svg";
import { ReactComponent as Square } from "../../../assets/images/youtube/Square.svg";
import { ReactComponent as Bell } from "../../../assets/images/youtube/Bell.svg";

const Header = ({ toggleSidebar }) => {
  return (
    <Wrapper>
      <Left>
        <Icon onClick={toggleSidebar}>
          <Hamburger />
        </Icon>
        <Logo>
          <YoutubeLogo />
        </Logo>
        <span>KR</span>
      </Left>
      <Center>
        <InputWrapper>
          <Input placeholder="검색" />
          <ImgKeyboard src="data:image/gif;base64,R0lGODlhEwALAKECAAAAABISEv///////yH5BAEKAAIALAAAAAATAAsAAAIdDI6pZ+suQJyy0ocV3bbm33EcCArmiUYk1qxAUAAAOw==" />
        </InputWrapper>
        <BtnSearch>
          <Glass />
        </BtnSearch>
        <Icon>
          <MicrophoneWrapper>
            <Microphone />
          </MicrophoneWrapper>
        </Icon>
      </Center>
      <Right>
        <Icon>
          <Video />
        </Icon>
        <Icon>
          <Square />
        </Icon>
        <Icon>
          <Bell />
        </Icon>
        <div>
          <ImgUser src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-256.png" />
        </div>
      </Right>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 56px;
  padding: 0 16px;
  /* width: 100vh; */
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #606060;
    font-size: 10px;
    margin: -18px 0 0 -10px;
  }
`;
const Icon = styled.div`
  padding: 8px;
  cursor: pointer;
`;
const Logo = styled.div`
  padding: 18px 14px 18px 16px;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 34px;
  border: 1px solid #ccc;
  border-radius: 2px 0 0 2px;
  margin-left: 40px;
  padding: 2px 10px 2px 7px;
  box-shadow: inset 0 1px 2px #eee;
  width: 33vw;
  overflow: hidden;
`;
const Input = styled.input`
  position: absolute;
  left: 10px;
  height: 24px;
  border: none;
  outline: none;
  font-size: 16px;
  margin-left: 0;
  padding: 0;
  width: 40vw;

  &::placeholder {
    color: #949292;
  }
`;

const ImgKeyboard = styled.img`
  width: 19px;
  height: 11px;
  position: absolute;
  right: 10px;
  opacity: 0.6;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

const BtnSearch = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
  border: 1px solid #d3d3d3;
  border-left: none;
  width: 64px;
  height: 40px;
  padding: 1px 6px;
  border-radius: 0 2px 2px 0;
  cursor: pointer;

  &:hover {
    background-color: #e9e9e9;
    box-shadow: 1px 1px 1px 0 #eee;
  }
`;

const MicrophoneWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 10px;
  width: 12vw;
`;
const ImgUser = styled.img`
  width: 33px;
  height: 33px;
  padding: 1px 6px;
  cursor: pointer;
`;

export default Header;
