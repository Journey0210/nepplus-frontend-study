import styled from "styled-components";
import User from "../../../../assets/images/youtube/User.png";
import { ReactComponent as Array } from "../../../../assets/images/youtube/Array.svg";
import { useState } from "react";

const CommentHeader = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <></>
      <Wrapper>
        <Top>
          <CommentsCount>댓글 37,193개</CommentsCount>
          <CommentsArray>
            <IconWrapper>
              <Array />
            </IconWrapper>
            <Text>정렬 기준</Text>
          </CommentsArray>
        </Top>
        <Bottom>
          <Left>
            <ThumbNailWrapper>
              <ThumbNail src={User} />
            </ThumbNailWrapper>
          </Left>
          <Right>
            <InputText
              placeholder="댓글추가..."
              onClick={() => setActive(true)}
            />
            {active && (
              <ButtonWrapper>
                <BtnDelete>취소</BtnDelete>
                <BtnComment>댓글</BtnComment>
              </ButtonWrapper>
            )}
          </Right>
        </Bottom>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  padding-top: 23px;
  margin-bottom: 30px;
`;
const Top = styled.div`
  display: flex;
  margin-bottom: 24px;
`;
const CommentsCount = styled.div``;
const CommentsArray = styled.div`
  display: flex;
  margin-left: 40px;
`;
const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
`;
const Text = styled.span`
  margin-left: 8px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div``;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ThumbNailWrapper = styled.div``;
const ThumbNail = styled.img`
  width: 42px;
`;
const InputText = styled.input`
  background: transparent;
  border: none;
  outline: none;
  border-bottom: 1px solid gray;
  line-height: 2;
  margin-left: 20px;
  &:focus {
    border-bottom: 2px solid #030303;
  }
  ::placeholder{
    font-size:14px;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;
const Btn = styled.button`
  width: 71px;
  height: 39px;
  border: none;
  font-size:14px;
  border-radius:2px;
`;
const BtnDelete = styled(Btn)`
background:transparent;
  color:#606060;
`;
const BtnComment = styled(Btn)`
  background: #ececec;
  color: gray;
`;
export default CommentHeader;
