import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { ReactComponent as ActivedHome } from "../../../../assets/images/insta/Home.svg";
import { ReactComponent as UnActivedHome } from "../../../../assets/images/insta/unactivedHome.svg";

const NavHome = ({ active }) => {
  // const [active, setActive] = useState(true);

  return (
    <>
      <NavLink to="/insta/main">
        <Icon>
          {active ? <ActivedHome /> : <UnActivedHome />}
          {/* <ActivedHome style={{ display: !active && "none" }} />
          <UnActivedHome style={{ display: active && "none" }} /> */}
        </Icon>
      </NavLink>
    </>
  );
};

const Icon = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 20px;
  cursor: pointer;
`;
export default NavHome;
