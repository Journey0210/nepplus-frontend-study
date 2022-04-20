import { useEffect, useState } from "react";
import styled from "styled-components";
import ImageList from "../../data/insta/ImageList";
const LoginImage = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  

  useEffect(() => {
    const changeImage = setInterval(() => {
      if (activeIndex === 4) {
        setActiveIndex(1);
      } else {
        setActiveIndex(activeIndex + 1);
      }
    }, 4000);
    return () => {
      clearInterval(changeImage); //unmount될 때 clearInterval을 해준다.
    };
  }, [activeIndex]);

  return (
    <>
      <Wrapper>
        <BackgroundImage src="https://www.instagram.com/static/images/homepage/phones/home-phones.png/1dc085cdb87d.png" />
        {ImageList.map(({ id, image }) => (
          <Image key={id} src={image} active={activeIndex === id} />
        ))}
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  margin: -39px 0 44px 0;
  height: 532.15px;
  width: 457px;
  position: relative;
`;
const Image = styled.img`
  position: absolute;
  top: 26px;
  right: 53px;
  opacity: 0;
  opacity: ${({ active }) => active && "1"};
  transition: opacity 3s;
`;
const BackgroundImage = styled.img``;
export default LoginImage;
