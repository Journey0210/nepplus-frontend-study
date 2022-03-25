import styled from "styled-components";
import { HomeBox } from "../../atoms/insta/box";
import { shortList } from "../../data/insta/postList";
import Posts from "../../molcules/insta/Posts";
import Sidebar from "../../organisms/insta/Sidebar";

const Main = () => {
  return (
    <>
      <Container>
        <Left>
          <HomeBox>
            <List>
              {shortList.map(({ id, user }) => (
                <li key={id}>
                  <ProfileImage src={user.profile} />
                  <Name>{user.name}</Name>
                </li>
              ))}
            </List>
          </HomeBox>
          <Posts />
        </Left>
        <Right>
          <Sidebar />
        </Right>
      </Container>
    </>
  );
};
const Container = styled.div`
  margin: 0 196.5px;
  display: flex;
  justify-content: center;
  padding-top: 24px;
  margin-top: 60px;
`;
const Left = styled.div``;
const List = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  padding-bottom: 16px;
  margin: 0;

  li {
    width: 70px;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const ProfileImage = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 2px solid #da307d;
`;
const Name = styled.div`
  font-size: 12px;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis; //...
  white-space: nowrap;
`;
const Right = styled.div``;

export default Main;
