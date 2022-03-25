import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Search } from "../../../assets/images/insta/Search.svg";
import { ReactComponent as NewPost } from "../../../assets/images/insta/NewPost.svg";
import { ReactComponent as FindPerson } from "../../../assets/images/insta/FindPerson.svg";
import NavDirect from "./navIcon/NavDirect";
import NavHome from "./navIcon/NavHome";
import Feed from "./dropdown/Feed";
import User from "./dropdown/User";
import useDropdownClickBody from "../../../hooks/useDropdownClickBody";
import InputDropdownList from "../../molcules/insta/InputDropdownList";
import Modal from "./modal/Modal";

import { Outlet } from "react-router-dom";

const TopNav = () => {
  const [isShow, setIsShow] = useState(false);
  const [isModalShow, setIsModalShow] = useState(false);
  const [active, setActive] = useState(true);

  const handleInputClick = () => {
    setIsShow(false);
    setActive(true);
  };
  const element = useDropdownClickBody(handleInputClick);
  const handleClick = () => {
    setIsShow(true);
    setActive(false);
  };

  return (
    <>
      <Nav>
        <NavItemWrapper>
          <InstaLogoWrapper>
            <InstaLogo src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" />
          </InstaLogoWrapper>
          <InputWrapper>
            <IconSearchWrapper active={active}>
              <Search />
            </IconSearchWrapper>
            <Input placeholder="검색" ref={element} onClick={handleClick} />
            {isShow && (
              <>
                <InputDropdown>
                  <InputDropdownList />
                </InputDropdown>
                <SmallBox></SmallBox>
              </>
            )}
          </InputWrapper>
          <IconsWrapper>
            <NavHome />
            <NavDirect />
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
      <Outlet />
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
  max-width: 260px;
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
  margin-right: 8px;
  /* position: absolute;
  top: 10px; */
  z-index: 1;
  opacity: ${({ active }) => (active ? 1 : 0)};
`;
const Input = styled.input`
  width: 235px;
  height: 25px;
  border: none;
  background: transparent;
  outline: none;
  /* margin-left: ${({ active }) => (active ? 0 : "25px")}; */
  padding-top: 3px;
  font-size: 20px;

  ::placeholder {
    font-size: 17px;
    color: #8e8e8e;
  }
`;

const InputDropdown = styled.div`
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
  padding-right: 10px;
`;
const Icon = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 20px;
  cursor: pointer;
`;

export default TopNav;
