import styled from "styled-components";
import { Link } from "react-router-dom";

//리액트 컴포넌트가 교체되는 이동은  link 라이브러리 사용
const Main = () => {
  return (
    <Wrapper>
      <PageTitle>영화 & 책 검색</PageTitle>
      <div>
        <Link to="/naver/movie">
          <BtnLink
            bg={
              "https://cdn06.pramborsfm.com/storage/app/media/Prambors/Creative%20Graphics/FILM-20200923054758.jpg?tr=w-800"
            }
          >
            Movies
          </BtnLink>
        </Link>
        <Link to="/naver/book">
          <BtnLink
            bg={
              "https://www.incimages.com/uploaded_files/image/1920x1080/getty_655998316_2000149920009280219_363765.jpg"
            }
          >
            Books
          </BtnLink>
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #20232a;
  color: #ffffff;
  min-height: 100vh;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const PageTitle = styled.h1`
  margin: 0;
  padding: 1.5rem;
  text-align: center;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 2px gray;
`;
const BtnLink = styled.button`
  width: 17rem;
  height: 10rem;
  margin-bottom: 1.2rem;
  border-radius: 1.6rem;
  font-size: 3rem;
  border: none;
  color: white;
  background-image: url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  text-shadow: 2px 2px 2px gray;

  &:first-of-type {
  }
`;
export default Main;
