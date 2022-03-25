import styled from "styled-components";
import { ReactComponent as UnactivedDirect } from "../../../../assets/images/insta/Direct.svg";
import { ReactComponent as ActivedDirect } from "../../../../assets/images/insta/activedDirect.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import useDropdownClickBody from "../../../../hooks/useDropdownClickBody";
const NavDirect = () => {
  const [active, setActive] = useState(false);
  const element = useDropdownClickBody(() => setActive(false));

  return (
    <>
      <Link to="/insta/direct">
        <Icon ref={element} onClick={() => setActive(true)}>
          <ActivedDirect style={{ display: !active && "none" }} />
          <UnactivedDirect style={{ display: active && "none" }} />
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

export default NavDirect;
