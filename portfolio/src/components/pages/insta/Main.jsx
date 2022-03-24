import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Search } from "../../../assets/images/insta/Search.svg";
import { ReactComponent as Home } from "../../../assets/images/insta/Home.svg";
import { ReactComponent as Direct } from "../../../assets/images/insta/Direct.svg";
import { ReactComponent as NewPost } from "../../../assets/images/insta/NewPost.svg";
import { ReactComponent as FindPerson } from "../../../assets/images/insta/FindPerson.svg";
import HomePage from "../../organisms/insta/Home";
import Feed from "../../organisms/insta/dropdown/Feed";
import User from "../../organisms/insta/dropdown/User";
import useDropdownClickBody from "../../../hooks/useDropdownClickBody";
import Modal from "../../organisms/insta/modal/Modal";

const Main = () => {
  const [isShow, setIsShow] = useState(false);
  const element = useDropdownClickBody(() => setIsShow(false));
  const [isModalShow, setIsModalShow] = useState(false);

  return (
    <>
      <Nav>
        <NavItemWrapper>
          <InstaLogoWrapper>
            <InstaLogo src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" />
          </InstaLogoWrapper>
          <InputWrapper>
            <IconSearchWrapper>
              <Search />
            </IconSearchWrapper>
            <Input ref={element} onClick={() => setIsShow(true)} />
            {isShow && (
              <>
                <InputDrowpdown></InputDrowpdown>
                <SmallBox></SmallBox>
              </>
            )}
          </InputWrapper>
          <IconsWrapper>
            <Icon>
              <Home />
            </Icon>
            <Icon>
              <Direct />
            </Icon>
            <Icon>
              <NewPost
                onClick={() => {
                  setIsModalShow(true);
                }}
              />
            </Icon>
            <Icon>
              <FindPerson />
            </Icon>
            <Feed />
            <User />
          </IconsWrapper>
        </NavItemWrapper>
      </Nav>
      {isModalShow && <Modal onClose={() => setIsModalShow(false)} />}
      <HomePage />
    </>
  );
};
const Nav = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-bottom: 1px solid #ddd;
  position: fixed;
  top: 0;
  z-index: 1;
`;
const NavItemWrapper = styled.div`
  width: 940px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const InstaLogoWrapper = styled.div`
  flex: 1;
  max-width: 250px;
`;
const InstaLogo = styled.img`
  width: 103px;
  height: 29px;
`;
const InputWrapper = styled.div`
  width: 268px;
  height: 36px;
  background: #efefef;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 16px;
  margin-right: 10px;
  border-radius: 8px;
  box-sizing: border-box;
`;
const IconSearchWrapper = styled.div`
  width: 16px;
  height: 16px;
  position: absolute;
  top: 10px;
  z-index: 1;
`;
const Input = styled.input`
  width: 235px;
  height: 25px;
  border: none;
  background: transparent;
  outline: none;
`;

const InputDrowpdown = styled.div`
  width: 375px;
  height: 362px;
  border-radius: 8px;
  background: #fff;
  position: absolute;
  top: 49px;
  left: -50px;
  border: 1px solid #ddd;
`;
const SmallBox = styled.div`
  position: absolute;
  bottom: -20px;
  left: 50%;
  width: 14px;
  height: 14px;
  background: #fff;
  transform: rotate(45deg);
  border-top: 1px solid #ddd;
  border-left: 1px solid #ddd;
`;
const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Icon = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 20px;
  cursor: pointer;
`;
const IconUser = styled.img`
  width: 24px;
  height: 24px;
`;
export default Main;
