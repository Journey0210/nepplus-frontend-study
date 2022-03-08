import styled, { css } from "styled-components";

const Box = styled.div`
  //styled.태그이름
  background: ${(props) =>
    props.color || "blue"}; //props.color의 값이 없으면 "blue"출력
  padding: 1rem;
  display: flex;

  width: 1024px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    //1024px이하인 경우
    width: 768px;
  }
  @media (max-width: 768px) {
    //768px 이하인 경우
    width: 100%;
  }
`;

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;

  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  ${(props) =>
    props.inverted && //props.inverted가 true면 아래 css를 적용
    css`
      background: none;
      border: 2px solid white;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `};

  & + button {
    margin-left: 1rem;
  }
`;

const StyledComponent = () => {
  return (
    <Box color="black">
      <Button>안녕하세요</Button>
      <Button inverted>테두리만</Button>
    </Box>
  );
};

export default StyledComponent;
