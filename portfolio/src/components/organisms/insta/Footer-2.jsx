import styled from "styled-components";
import { FirstInfoList } from "../../data/insta/FooterInfoList";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <Section01>
          {FirstInfoList.map((list, index) => (
            <List key={index}>{list}</List>
          ))}
        </Section01>
        <Section03>
          <List>한국어</List>
          <List>© 2022 Instagram from Meta</List>
        </Section03>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px 0 20px;
`;
const Section = styled.ul`
  list-style: none;
  display: flex;
  color: #8e8e8e;
  font-size: 12px;
  height: 23px;
  margin: 0;
`;
const Section01 = styled(Section)``;
const Section03 = styled(Section)`
  margin-top: 8px;
`;
const List = styled.li`
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 12px;
`;

export default Footer;
