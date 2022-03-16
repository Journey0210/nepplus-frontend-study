import styled from "styled-components";
import BookList from "../organisims/BookList";
import { useState } from "react";
import { getBookList } from "../../../apis/naver"; //axios.get함수를 src/apis/naver.js에서 따로 선언함

const Book = () => {
  const [text, setText] = useState("");
  const [bookList, setBookList] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await getBookList({ query: text });
    setBookList(result.data.items);
  };

  return (
    <Wrapper>
      <PageTitle>BOOK</PageTitle>
      <Form onSubmit={handleSubmit}>
        <InputText onChange={(e) => setText(e.target.value)} value={text} />
        <Button>검색</Button>
      </Form>
      <BookList data={bookList} />
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
