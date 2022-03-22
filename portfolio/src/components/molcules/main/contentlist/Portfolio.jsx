import styled from "styled-components";
const Portfolio = () => {
  return (
    <>
      <Wrapper>
        <Carousel>
          <List>
            <Portfolio01></Portfolio01>
            <Portfolio02></Portfolio02>
            <Portfolio03></Portfolio03>
          </List>
        </Carousel>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div``;
const Carousel = styled.div``;

const List = styled.div`
  width: 1000px;
  display: flex;
  div {
    flex-shrink: 0;
  }
`;

const Portfolio01 = styled.div`
  width: 1000px;
  height: 800px;
  background: #ccc;
  border: 1px solid black;
`;
const Portfolio02 = styled.div`
  width: 1000px;
  height: 800px;
  background: red;
  border: 1px solid black;
`;
const Portfolio03 = styled.div`
  width: 1000px;
  height: 800px;
  background: blue;
  border: 1px solid black;
`;
export default Portfolio;
