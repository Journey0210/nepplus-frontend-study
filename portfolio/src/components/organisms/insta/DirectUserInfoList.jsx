import styled from "styled-components";

const UserInfoList = () => {
  return (
    <>
      <List>
        <UserProfile></UserProfile>
        <UserInfo>
          <div></div>
          <div></div>
        </UserInfo>
      </List>
      <List>
        <UserProfile></UserProfile>
        <UserInfo>
          <div></div>
          <div></div>
        </UserInfo>
      </List>
      <List>
        <UserProfile></UserProfile>
        <UserInfo>
          <div></div>
          <div></div>
        </UserInfo>
      </List>
    </>
  );
};
const List = styled.div`
  height: 70px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
`;
const UserProfile = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #efefef;
  margin-right: 16px;
`;
const UserInfo = styled.div`
  div:first-of-type {
    width: 116px;
    height: 14px;
    background: #efefef;
    border-radius: 4px;
    margin-bottom: 11px;
  }
  div:last-of-type {
    width: 84px;
    height: 14px;
    background: #efefef;
    border-radius: 4px;
  }
`;
export default UserInfoList;
