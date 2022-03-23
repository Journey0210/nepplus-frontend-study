import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ReactComponent as ArrowLeft } from "../../../assets/images/youtube/ArrowLeft.svg";
import { ReactComponent as ArrowRight } from "../../../assets/images/youtube/ArrowRight.svg";

const Portfolio01 = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (n) => {
    if (activeIndex === 0 && n === -1) {
      setActiveIndex(0);
    } else if (activeIndex === data.length - 1 && n === 1) {
      setActiveIndex(data.length - 1);
    } else {
      setActiveIndex(activeIndex + n);
    }
  };

  const handleClickBtnCircle = (n) => {
    setActiveIndex(n);
  };

  return (
    <>
      <Body>
        <IconWrapper onClick={() => handleClick(-1)}>
          <ArrowLeft />
        </IconWrapper>
        <PortfolioWrapper>
          <Wrapper index={activeIndex}>
            {data.map(({ id, title, image, link, content, color }) => (
              <List key={id}>
                <Title>{title}</Title>
                <Content>
                  <Left>
                    <ImgYoutube src={image} />
                    <Button color={color}>
                      <StyledLink
                        to={link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Open project
                      </StyledLink>
                    </Button>
                  </Left>
                  <Right>
                    <SubTitle></SubTitle>
                    <TextBox>{content}</TextBox>
                  </Right>
                </Content>
              </List>
            ))}
          </Wrapper>
        </PortfolioWrapper>
        <IconWrapper onClick={() => handleClick(1)}>
          <ArrowRight />
        </IconWrapper>
      </Body>
      <ButtonWrapper>
        <BtnCircle
          onClick={() => handleClickBtnCircle(0)}
          active={activeIndex === 0}
        ></BtnCircle>
        <BtnCircle
          onClick={() => handleClickBtnCircle(1)}
          active={activeIndex === 1}
        ></BtnCircle>
        <BtnCircle
          onClick={() => handleClickBtnCircle(2)}
          active={activeIndex === 2}
        ></BtnCircle>
      </ButtonWrapper>
    </>
  );
};

const Body = styled.div`
  display: flex;
  align-items: center;
`;

const PortfolioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;
const IconWrapper = styled.div`
  width: 70px;
  height: 80px;
  opacity: 0.6;
  cursor: pointer;
  z-index: 1;
`;

const Wrapper = styled.div`
  width: 1100px;
  display: flex;
  div {
    flex-shrink: 0; //shrink 기본값이 1
  }
  transform: ${({ index }) => `translateX(${index * -1100}px)`};
  transition: transform 1s;
`;
const List = styled.div`
  width: 1100px;
  height: 500px;
  background: white;
`;
const Title = styled.h1`
  font-size: 45px;
  text-align: center;
  margin-bottom: 30px;
`;
const Content = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;
const Left = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 40px;
`;

const Button = styled.button`
  margin-top: 30px;
  width: 250px;
  height: 60px;
  font-size: 37px;
  background: ${({ color }) => color};
  border: none;
  border-radius: 10px;
  box-shadow: 6px 6px 11px 5px #eee;
`;

const StyledLink = styled(Link)`
  color: #fff;
  font-family: "BalooThambi2-VariableFont_wght";
`;
const ImgYoutube = styled.img`
  width: 400px;
  height: 200px;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const SubTitle = styled.h1`
  margin: 0;
`;
const TextBox = styled.div`
  border: 3px solid black;
  border-radius: 5px;
  height: 300px;
  width: 500px;
`;

const ButtonWrapper = styled.div``;

const BtnCircle = styled.button`
  width: 21px;
  height: 21px;
  border-radius: 50%;
  border: none;
  background: #ddd;
  & + & {
    margin-left: 30px;
  }
  margin-top: 20px;
  cursor: pointer;
  background: ${({ active }) => active && "black"};
`;

export default Portfolio01;
