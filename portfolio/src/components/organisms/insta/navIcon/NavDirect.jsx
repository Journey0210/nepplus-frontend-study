import styled from "styled-components";
import { ReactComponent as UnactivedDirect } from "../../../../assets/images/insta/Direct.svg";
import { ReactComponent as ActivedDirect } from "../../../../assets/images/insta/activedDirect.svg";
import { Link } from "react-router-dom";

const NavDirect = ({ active }) => {
  return (
    <>
      <Link to="/insta/direct">
        <Icon>{active ? <ActivedDirect /> : <UnactivedDirect />}</Icon>
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
