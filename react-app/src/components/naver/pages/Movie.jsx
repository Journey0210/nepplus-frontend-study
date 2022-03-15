import { useState } from "react";
import styled from "styled-components";

import MovieList from "./organisims/MovieList";
import { getMovieList } from "../../../apis/naver";

const Movie = () => {
  const [text, setText] = useState("");
  const [movieList, setMovieList] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await getMovieList({ query: text }); //result는 getMovieList에서 리턴된 result.data

    setMovieList(result.items);
  };
  return (
    <Wrapper>
      <PageTitle>MOVIE</PageTitle>
      <Form onSubmit={handleSubmit}>
        <InputText
          placeholder="영화제목을 검색하세요"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <BtnSubmit>검색</BtnSubmit>
      </Form>
      <MovieList data={movieList} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #20232a;
  color: #ffffff;
  min-height: 100vh;
`;
const PageTitle = styled.h2`
  text-align: center;
  margin: 0;
  padding: 10px;
`;
const Form = styled.form`
  display: flex;
  padding: 15px;
`;
const InputText = styled.input`
  flex: 1;
`;
const BtnSubmit = styled.button``;

export default Movie;
