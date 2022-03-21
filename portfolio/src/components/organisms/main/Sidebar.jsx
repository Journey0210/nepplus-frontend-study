import styled from "styled-components";
const Sidebar = () => {
  return (
    <Container>
      <Icon>
        <Img src="https://cdn1.iconfinder.com/data/icons/unicons-line-vol-6/24/user-square-256.png" />
      </Icon>
      <Icon>
        <a href="https://velog.io/@rootcho" target="_blank" rel="noopener">
          <Img
            className="hover"
            src="https://cdn1.iconfinder.com/data/icons/social-network-15/512/vimeo-256.png"
          />
        </a>
      </Icon>
      <Icon>
        <a href="https://github.com/RootCho" target="_blank" rel="noopener">
          <Img
            className="hover"
            src="https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-256.png"
          />
        </a>
      </Icon>
    </Container>
  );
};

const Container = styled.div`
  width: 100px;
  height: calc(100vh - 70px);
  background: #fff;
  position: fixed;
  z-index: 2;
  top: 70px;
  padding: 0 60px 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Icon = styled.div`
  width: 55px;
  height: 70px;
  display: flex;
  justify-content: center;
`;
const Img = styled.img`
  width: 30px;
  height: 30px;

  &.hover {
    cursor: pointer;
    :hover {
      width: 35px;
      height: 35px;
    }
  }
`;
export default Sidebar;
