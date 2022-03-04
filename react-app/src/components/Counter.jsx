import { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);
  let name = "react";
  const handleClick = () => {
    name = "vue";
    setNumber(number + 1);
    console.log(name);
  };

  return (
    <>
      {name}
      <h1>{number}</h1>
      <button onClick={handleClick}>+1</button>
    </>
  );
};

export default Counter;
