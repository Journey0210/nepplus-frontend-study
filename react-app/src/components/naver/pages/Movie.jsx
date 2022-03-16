import { useEffect, useState } from "react";
import styled from "styled-components";
import MovieList from "../organisims/MovieList";
import { getMovieList } from "../../../apis/naver";
import { countryList, genreList } from "../../../datas/naver";
import Pagination from "../organisims/Pagination";

const Movie = () => {
  const [text, setText] = useState("");
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState("ALL");
  const [genre, setGenre] = useState("ALL");
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    //즉시 실행 함수 IIFE
    // (async () => {})()
    searchMovie();
  }, [country, genre, page, query]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPage(1);
    setQuery(text);
  };

  useEffect(() => {
    window.scrollTo(0, 0); //page가 이동될 때 화면이 맨 위로 스크롤 되있게 하기
  }, [page]);

  const searchMovie = async () => {
    if (!text) return; //text가 빈값이면 실행하지 않음

    //  cosnt page = 1 2 3 4 5
    //  const start = 1 11 21 31 41
    const start = page * 10 - 9;

    const params = { query: text, country, genre, start };
    if (country === "ALL") delete params.country; //객체 key 삭제하는 방법
    if (genre === "ALL") delete params.genre;

    const { items, total } = await getMovieList(params); //result는 getMovieList에서 리턴된 result.data
    setMovieList(items);
    setTotal(total);
  };

  return (
    <>
      <Wrapper>
        <PageTitle>MOVIE</PageTitle>
        <Form onSubmit={handleSubmit}>
          <select onChange={(e) => setCountry(e.target.value)} value={country}>
            <option value="ALL">전체</option>
            {countryList.map(({ name, code }) => (
              <option value={code} key={code}>
                {name}
              </option>
            ))}
          </select>
          <select onChange={(e) => setGenre(e.target.value)} value={genre}>
            <option value="ALL">전체</option>
            {genreList.map(({ name, code }) => (
              <option value={code} key={code}>
                {name}
              </option>
            ))}
          </select>
          <InputText
            placeholder="영화를 검색하세요"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          <BtnSubmit>검색</BtnSubmit>
        </Form>
        <MovieList data={movieList} />
        <Pagination
          nowpage={page}
          onPageChange={(page) => setPage(page)}
          total={total}
        />
      </Wrapper>
    </>
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
  padding: 13px;
  flex-wrap: wrap;
`;
const InputText = styled.input`
  flex: 1;
  margin-left: 10px;
`;
const BtnSubmit = styled.button``;

export default Movie;
