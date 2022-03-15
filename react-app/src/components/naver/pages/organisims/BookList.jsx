import styled from "styled-components";

const BookList = ({ data }) => {
  return (
    <>
      <List>
        {data.map(({ image, title, link, price, author, pubdate, isbn }) => (
          <Item key={isbn}>
            <a href={link} target="_blank" rel="noreferrer">
              <Image src={image} />
            </a>
            <Body>
              <Title dangerouslySetInnerHTML={{ __html: title }} />
              <Author dangerouslySetInnerHTML={{ __html: "작가: " + author }} />
              <Year>출판일: {pubdate} </Year>
              <Price>가격: {price}원</Price>
            </Body>
          </Item>
        ))}
      </List>
    </>
  );
};

const List = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  color: white;
  padding: 1rem;
`;
const Item = styled.div`
  display: flex;
`;
const Image = styled.img`
  width: 130px;
  height: 200px;
`;
const Body = styled.div`
  margin-left: 1rem;
`;

const Title = styled.h3`
  margin: 0;
`;
const Author = styled.h4``;
const Year = styled.h4``;
const Price = styled.h4``;
export default BookList;
