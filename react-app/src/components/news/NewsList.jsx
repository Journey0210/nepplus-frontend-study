import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from "axios";
import { useEffect, useState } from "react";

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null); //기사들을 담을 배열
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDate = async () => {
      setLoading(true);
      try {
        const query = category === "all" ? "" : `&category=${category}`;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=c5296411b31248d7a97bc5451fc9a313`
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchDate();
  }, [category]);

  if (loading) {
    return <NewsListBlock>대기중...</NewsListBlock>;
  }

  if (!articles) {
    return null;
  }

  //articles 값이 유효할때
  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} /> //article이라는 props넘겨주기
      ))}
    </NewsListBlock>
  );
};

export default NewsList;

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
