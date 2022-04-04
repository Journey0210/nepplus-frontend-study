import styled from "styled-components";

const Information = () => {
  return (
    <Wrapper>
    <List>
      <div>
        <span>정보</span>
        <span>보도자료</span>
        <span>저작권</span>  
      </div>
      <div>
        <span>문의하기</span>
        <span>크리에이터</span>
        <span>광고</span> 
      </div>
      <div><span>개발자</span></div>
    </List>
    <List>
      <div>
        <span>약관</span>
        <span>개인정보처리방침</span>
      </div>
      <div>
        <span>정책 및 안전</span>
      </div>
      <div>
        <span>Youtube 작동의 원리</span>
      </div>
      <div>
        <span>새로운 기능 테스트하기</span>
      </div>
    </List>
    <List>
      <div><span>© 2022 Google LLC</span></div>
      <div><span>CEO: 선다 피차이</span></div>
      <div><span>주소: 1600 Amphitheatre Parkway,</span></div>
      <div><span>Mountain View, CA 94043, USA.</span></div>
      <div><span>전화: 080-822-1450(무료)</span></div>
    </List>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding: 12px 23px;
`
const List = styled.div`
  span{
  color:#606060;
  font-size:13px;
  }
  span+span{
    margin-left: 8px;
  }
  &:last-of-type span{
  color:#909090;
  font-size:12px;
  }
  &+&{
    margin-top: 12px;
  }
`
export default Information;
