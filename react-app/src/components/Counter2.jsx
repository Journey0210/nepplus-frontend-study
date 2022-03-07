import { useState } from "react";

const Counter2 = () => {
  const [num, setNum] = useState(7);
  const handleChange = (n) => {
    setNum(num + n);
  };
  return (
    <>
      <h1>현재 카운터 값은 {num}입니다.</h1>
      <button onClick={() => handleChange(5)}>+5</button>
      <button onClick={() => handleChange(1)}>+1</button>
      <button onClick={() => handleChange(-1)}>-1</button>
      <button onClick={() => handleChange(-3)}>-3</button>
    </>
  );
};

export default Counter2;
