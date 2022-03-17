import styled from "styled-components";
import BookList from "../organisims/BookList";
import { useEffect, useState } from "react";
import { getBookList } from "../../../apis/naver"; //axios.get함수를 src/apis/naver.js에서 따로 선언함
import Pagination from "../organisims/Pagination";
import qs from "qs";
import { useNavigate, useLocation } from "react-router-dom";

const Book = () => {
  const [text, setText] = useState("");
  const [bookList, setBookList] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [query, setQuery] = useState("");

  /////상세페이지에서 뒤로 가기 했을 때 검색결과 그대로 남게 하기 구현 ▼
  const navigate = useNavigate();
  const location = useLocation();
  const search = location.search; //"?query=html&page=1"

  useEffect(() => {
    const { query, page } = qs.parse(search.slice(1)); // ?없애기 위해 문자열 첫번째 글자 삭제//
    //pars는 객체로 만들어줌{query: 'html', page: '1'}

    if (query) {
      setQuery(query);
      setText(query);
    } else {
      reset();
    }

    if (page) {
      setPage(+page);
    }
  }, [search]);

  const reset = () => {
    setText("");
    setQuery("");
    setPage(1);
    setTotal(0);
    setBookList([]);
  };
  //////////

  const display = 5; // set함수 사용해서 렌더링 될 때마다 화면에 보여줘야하는 값이라면 useState를 사용하지만
  // 그게 아니라 고정된 값을 사용한다면 일반 변수선언을 해준다. 일반 변수도 props로 보내줄 수 있다.

  useEffect(() => {
    searchBook();
  }, [page, query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(1); //재검색시, 다시 첫 페이지에서 시작하도록 설정. UX를 고려한 것 !
    setQuery(text); // 핸들서브밋 할때만 서치 북을 하기 위해서 query라는 useState를 만든다.
  };

  useEffect(() => {
    window.scrollTo(0, 0); //page가 이동될 때 화면이 맨 위로 스크롤 되있게 하기
  }, [page]);

  const searchBook = async () => {
    if (!query) return;
    const start = page * display - (display - 1);
    const { items, total } = await getBookList({
      query: query,
      start: start,
      display: display,
    });
    setBookList(items);
    setTotal(total);

    //상세페이지에서 뒤로 가기 했을 때 검색결과 그대로 남게 하기 구현 ▼
    //검색할때마다 url parameter에 검색어 저장
    const search = qs.stringify({ query, page }); //객체를 queryString으로 만들어줌 "query=삼국지&page=1"
    navigate({ search: search }); //페이지를 이동하는 함수. pathname:"/naver/book"
  };

  return (
    <Wrapper>
      <PageTitle>BOOK</PageTitle>
      <Form onSubmit={handleSubmit}>
        <InputText onChange={(e) => setText(e.target.value)} value={text} />
        <Button>검색</Button>
      </Form>
      <BookList data={bookList} />
      <Pagination
        nowpage={page}
        onPageChange={(n) => setPage(n)}
        display={display}
        total={total}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #20232a;
  color: #ffffff;
  min-height: 100vh;
`;
const PageTitle = styled.h1`
  margin: 0;
  padding: 1rem;
  text-align: center;
`;
const Form = styled.form`
  display: flex;
  padding: 1rem;
`;
const InputText = styled.input`
  flex: 1;
`;
const Button = styled.button`
  margin-left: 0.5rem;
`;
export default Book;
