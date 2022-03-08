import "./App.css";
import Info from "./components/Info";
import { useState } from "react";
import CSSModule from "./components/CSSModule";
import TodoList from "./components/TodoList";

function App() {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      {/* <button onClick={() => setIsShow(true)}>나오기</button>
      <button onClick={() => setIsShow(false)}>숨기기</button>
      {isShow && <Info />} */}
      <TodoList />
    </>
  );
}

export default App;
