import styled from "styled-components";

const Line = () => {
  return (
    <>
      <Wrapper>
        <SideLine></SideLine>
        <TextBox>또는</TextBox>
        <SideLine></SideLine>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 40px 18px;
`;
const TextBox = styled.div`
  font-size: 13px;
  color: #8e8e8e;
  margin: 0 18px;
  font-weight: 600;
`;
const SideLine = styled.div`
  width: 98px;
  height: 1px;
  border-top: 1px solid #dbdbdb;
`;
export default Line;
