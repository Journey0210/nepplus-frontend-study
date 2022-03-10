import "./App.css";
import Info from "./components/Info";
import { useState } from "react";
import News from "./components/news/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoList from "./components/TodoList";

function App() {
  const [isShow, setIsShow] = useState(false);
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
