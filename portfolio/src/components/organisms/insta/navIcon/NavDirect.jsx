import styled from "styled-components";
import { ReactComponent as UnActiveDirect } from "../../../../assets/images/insta/Direct.svg";
import { ReactComponent as ActiveDirect } from "../../../../assets/images/insta/activeDirect.svg";
import { Link } from "react-router-dom";

const NavDirect = ({ active }) => {
  return (
    <>
      <Link to="/insta/direct">
        <Icon>{active ? <ActiveDirect /> : <UnActiveDirect />}</Icon>
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
