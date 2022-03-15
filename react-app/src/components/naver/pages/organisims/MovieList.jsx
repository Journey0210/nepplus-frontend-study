import styled from "styled-components";
const MovieList = ({ data }) => {
  return (
    <>
      <List>
        {data.map(({ image, title, pubDate, subtitle, link }) => (
          <Item key={link}>
            <a href={link} target="_blank" rel="noreferrer">
              <Thumbnail src={image} />
            </a>
            <Title dangerouslySetInnerHTML={{ __html: title }} />
            <SubTitle>{subtitle}</SubTitle>
            <Year>{pubDate}</Year>
          </Item>
        ))}
      </List>
    </>
  );
};

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  padding: 1.5rem;
`;
const Item = styled.div`
  text-align: center;
  color: #ffffff;
`;
const Thumbnail = styled.img`
  width: 100%;
  height: 200px;
  cursor: pointer;
`;
const Title = styled.h4`
  margin: 0;
`;
const SubTitle = styled.h4`
  margin: 0;
`;
const Year = styled.h4`
  margin: 0;
`;
export default MovieList;
