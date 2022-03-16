import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBookDetail } from "../../../apis/naver";
import styled from "styled-components";

const BookDetail = () => {
  const params = useParams();
  const [book, setBook] = useState({});
  const { isbn } = params;

  useEffect(() => {
    searchBook();
  }, []);

  const searchBook = async () => {
    const result = await getBookDetail({ d_isbn: isbn });
    return setBook(result.items[0]);
  };

  const { image, title, author, pubdate, description, publisher } = book;
  return (
    <Wrapper>
      <Img src={image} />
      <Title>{title}</Title>
      <Author>{author}</Author>
      <Publisher>{publisher}</Publisher>
      <Date>출판일: {pubdate}</Date>
      <Desc>{description}</Desc>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin: 20px;
  color: #fff;
`;
const Img = styled.img`
  width: 200px;
  height: 300px;
`;
const Title = styled.h2`
  color: yellow;
`;
const Author = styled.h2``;
const Publisher = styled.h3``;
const Date = styled.h3``;
const Desc = styled.p``;
export default BookDetail;
