import "./App.css";
import Info from "./components/info";
import { useState } from "react";
import Info2 from "./components/Info2";
import Counter3 from "./components/Counter3";

function App() {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <button onClick={() => setIsShow(true)}>나오기</button>
      <button onClick={() => setIsShow(false)}>숨기기</button>
      {isShow && <Info />}
      <Counter3 />
      <Info2 />
    </>
  );
}

export default App;
