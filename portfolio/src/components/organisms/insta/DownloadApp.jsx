import styled from "styled-components";

const DownloadApp = () => {
  return (
    <>
      <Wrapper>
        <InfoText>앱을 다운로드하세요.</InfoText>
        <ImageWrapper>
          <ImgIOS src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_korean-ko.png/4a5c9d62d51b.png" />
          <ImgAndroid src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png" />
        </ImageWrapper>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;
const InfoText = styled.p`
  font-size: 14px;
  margin: 10px 20px;
`;
const ImageWrapper = styled.div`
  display: flex;
  margin: 10px 0;
`;
const ImgIOS = styled.img`
  width: 136px;
  height: 40px;
  margin-right: 10px;
`;
const ImgAndroid = styled.img`
  width: 136px;
  height: 40px;
`;
export default DownloadApp;
