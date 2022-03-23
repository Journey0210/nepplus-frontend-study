import styled from "styled-components";
const Sidebar = () => {
  return (
    <Container>
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
  width: 80px;
  height: calc(100vh - 70px);
  background: ${(props)=>props.theme.body} !important;
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
  height: 80px;
  display: flex;
  justify-content: center;
`;
const Img = styled.img`
  width: 35px;
  height: 35px;

  &.hover {
    cursor: pointer;
    :hover {
      width: 40px;
      height: 40px;
    }
  }
`;
export default Sidebar;
