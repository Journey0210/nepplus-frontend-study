import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const navList = [
  {
    link: "/naver",
    name: "메인",
  },
  {
    link: "/naver/movie",
    name: "영화",
  },
  {
    link: "/naver/book",
    name: "책",
  },
];

const TopNav = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  if (pathname === "/naver") return <></>; //메인 페이지에는 topNav출력 안 되게 하기

  return (
    <Container>
      <Nav>
        {navList.map(({ link, name }) => (
          <Link to={link} key={link}>
            <Button>{name}</Button>
          </Link>
        ))}
      </Nav>
    </Container>
  );
};
const Container = styled.div`
  background-color: white;
  border: 4px solid #20232a;
`;
const Nav = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Button = styled.button`
  border-radius: 20px;
  cursor: pointer;
  border: 1px solid #20232a;
  background-color: #20232a;
  color: white;
  font-size: 20px;
  font-weight: bold;
  width: 80px;
  padding: 5px 10px;
`;

export default TopNav;
