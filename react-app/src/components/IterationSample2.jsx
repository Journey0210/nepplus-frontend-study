import { useRef, useState } from "react";

const IterationSample2 = ({ name }) => {
  const [text, setText] = useState("");
  const [lists, setLists] = useState([]);
  const [id, setId] = useState(1);
  const inputRef = useRef();

  // const handleKeyPress = (e) => {
  //   // if (e.key === "Enter") handleClick();
  //   console.log("안녕");
  // };

  const handleClick = () => {
    const newLists = [...lists, { id: id, text: text }]; //newLists = [{id:1, text: 조혜진}, ] ...lists :객체의 내용을 모두 "펼쳐서" 기존 객체를 복사
    setId(id + 1);
    setLists(newLists);
    setText("");
    inputRef.current.focus(); //useRef를 활용하여 인풋에 focus 주기
  };

  const remove = (id) => {
    const newLists = lists.filter((list) => list.id !== id); //돔을 직접 건드리는 게 아니라 새로운 배열을 만들어서 렌더링한다.
    setLists(newLists);
  };

  const printList = lists.map(({ id, text }) => (
    <li key={id} onDoubleClick={() => remove(id)}>
      👍 {id} : {text}
    </li>
  ));

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault(); //새로고침 방지
          handleClick(); //form 태그로 감싸면 버튼을 클릭했을 때, 엔터를 클릭했을 때 submit기능이 실행된다. button에 onClik기능 추가해 함수 실행할 필요 x
        }}
      >
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          ref={inputRef}
        />
        <button
          style={{ background: "black", color: "white", borderRadius: 10 }}
        >
          추가
        </button>
      </form>
      {name}
      <ul style={{ listStyle: "none" }}>{printList}</ul>
    </>
  );
};

export default IterationSample2;
