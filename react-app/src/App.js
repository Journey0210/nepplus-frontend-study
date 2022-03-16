import "./App.css";
// import Info from "./components/Info";
import { useState } from "react";
import News from "./components/news/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoList from "./components/TodoList";
import Bootstrap from "./components/bootstrap/Bootstrap";
import NaverMain from "./components/naver/pages/Main";
import NaverMovie from "./components/naver/pages/Movie";
import NaverBook from "./components/naver/pages/Book";
import NaverBookDetail from "./components/naver/pages/BookDetail";
import Naver from "./components/naver/organisims/Naver";

function App() {
  // const [isShow, setIsShow] = useState(false);
  return (
    <BrowserRouter>
      {/* <button onClick={() => setIsShow(true)}>나오기</button>
      <button onClick={() => setIsShow(false)}>숨기기</button>
      {isShow && <Info />} */}

      <Routes>
        <Route path="/todo" element={<TodoList />} />
        <Route path="/news" element={<News />}>
          <Route path="/news/:category" element={<News />} />
        </Route>
        <Route path="/bootstrap" element={<Bootstrap />} />
        <Route path="/naver" element={<Naver />}>
          <Route path="/naver" element={<NaverMain />} />
          <Route path="/naver/movie" element={<NaverMovie />} />
          <Route path="/naver/book" element={<NaverBook />} />
          <Route path="/naver/book/:isbn" element={<NaverBookDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
