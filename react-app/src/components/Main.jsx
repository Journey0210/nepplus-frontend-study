import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Link to={"/bootstrap"}>
        <h2>부트스트랩</h2>
      </Link>
      <Link to={"/todo"}>
        <h2>투두리스트</h2>
      </Link>
      <a href="/to-do-list/to-do-list.html">
        <h2>투두리스트(제이쿼리)</h2>
      </a>
    </>
  );
};

export default Main;
