import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import useDropdownClickBody from "../../../../hooks/useDropdownClickBody";
import { ReactComponent as ActivedHome } from "../../../../assets/images/insta/Home.svg";
import { ReactComponent as UnActivedHome } from "../../../../assets/images/insta/unactivedHome.svg";

const NavHome = () => {
  const [active, setActive] = useState(false);
  const element = useDropdownClickBody(() => setActive(false));
  return (
    <>
      <Link to="/insta/main">
        <Icon ref={element} onClick={() => setActive(true)}>
          <ActivedHome style={{ display: !active && "none" }} />
          <UnActivedHome style={{ display: active && "none" }} />
        </Icon>
      </Link>
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
