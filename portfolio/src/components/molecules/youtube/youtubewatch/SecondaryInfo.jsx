import styled from "styled-components";
const SecondaryInfo = ({ thumbnail, name }) => {
  return (
    <>
      <Wrapper>
        <Left>
          <ThumbNailWrapper>
            <ThunmbNail src={thumbnail} />
          </ThumbNailWrapper>
          <Info>
            <Name>{name}</Name>
            <Description></Description>
            <Button>더보기</Button>
          </Info>
        </Left>
        <Right>
          <BtnSubsc>구독</BtnSubsc>
        </Right>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  padding-top: 20px;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  display: felx;
`;
const Right = styled.div``;
const ThumbNailWrapper = styled.div`
  margin-right: 10px;
  margin-bottom: 10px;
`;
const ThunmbNail = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;
const Info = styled.div``;
const Name = styled.span``;
const Description = styled.div``;
const Button = styled.button`
  border: none;
  background: none;
  color: #606060;
`;
const BtnSubsc = styled.button`
  width: 71px;
  height: 39px;
  background: #c00;
  color: white;
  border-radius: 2px;
  border: none;
  font-size: 14px;
`;
export default SecondaryInfo;
