import { useRef, useState } from "react";

const IterationSample = () => {
  //버튼을 누르면 input에 입력된 값 alert
  //1.input value가 바뀔 때(onChange) 마다 그 값을 useState변수에 저장
  //2.확인버튼을 누르면(onClick) useState변수 alert
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);

  const [text, setText] = useState("");
  const nextId = useRef(5); //const [nextId, setNextId] = useState(5) 대신에 useRef사용// nextId.current = 5

  const handleChange = (e) => setText(e.target.value);
  const handleClick = () => {
    const newNames = [...names, { id: nextId.current, text: text }]; //=== names.concat({id:nextId, text:text})
    nextId.current = nextId.current + 1;
    setNames(newNames);
    setText("");
  };
  const handleDelete = (id) => {
    const newNames = names.filter((name) => name.id !== id);
    setNames(newNames);
  };
  return (
    <div>
      <input onChange={handleChange} value={text} />
      <button onClick={handleClick}>추가</button>
      <ul>
        {names.map(({ id, text }) => (
          <li key={id} onDoubleClick={() => handleDelete(id)}>
            {id}:{text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IterationSample;
