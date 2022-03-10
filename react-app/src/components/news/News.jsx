import NewsList from "./NewsList";
import Categories from "./Categories";
import { useState } from "react";
import { useParams } from "react-router-dom";

const News = () => {
  const params = useParams(); // customHook 중 하나 params=> news/ 뒤에 오는애
  console.log(params);
  const category = params.category || "all";
  //   const [category, setCategory] = useState("all");
  //   const onSelect = (category) => setCategory(category);
  return (
    <>
      <Categories category={category} />
      <NewsList category={category} />
    </>
  );
};

export default News;
