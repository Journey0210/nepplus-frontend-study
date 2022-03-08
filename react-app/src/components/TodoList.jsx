import { useRef, useState } from "react";
import styled from "styled-components";

const TodoList = () => {
  const [text, setText] = useState("");
  const [lists, setLists] = useState([]);
  const [id, setId] = useState(1);

  const addList = () => {
    const newLists = [...lists, { id: id, text: text }];
    setLists(newLists);
    setId(id + 1);
    console.log(newLists);
    setText("");
  };

  const removeList = (id) => {
    const newList = lists.filter((list) => list.id !== id);
    setLists(newList);
  };

  const editList = (id) => {
    let newText = prompt("수정할 내용을 입력하세요");
    const newLists = lists.map((list) => {
      return list.id === id ? { id: id, text: newText } : list;
    });
    console.log(newLists);
    setLists(newLists);
  };

  return (
    <Container>
      <Title>일정관리🕓</Title>
      <form
        onSubmit={(e) => {
          //아래 두 함수를 handleSubmit 과 같은 하나의 함수로 합쳐서 사용가능
          e.preventDefault();
          addList();
        }}
      >
        <InputWrapper>
          <InputText
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <BtnSubmit>+</BtnSubmit>
        </InputWrapper>
      </form>
      <List>
        {lists.map(({ id, text }) => (
          <Item key={id} isDone={true}>
            <label>
              <Checkbox type="checkbox" />
              <Content>{text}</Content>
            </label>
            <BtnWrapper>
              <Button color="green" onClick={() => editList(id)}>
                수정
              </Button>
              <Button color="red" onClick={() => removeList(id)}>
                삭제
              </Button>
            </BtnWrapper>
          </Item>
        ))}
      </List>
    </Container>
  );
};

const Container = styled.div`
  width: 500px;
  background: white;
  border: 1px solid #eee;

  label {
    width: 100%;
  }
`;
const Title = styled.div`
  padding: 15px;
  text-align: center;
  background: #0288d1;
  color: white;
  font-size: 26px;
`;
const InputWrapper = styled.div`
  display: flex;
`;
const InputText = styled.input`
  flex: 1;
  border: none;
  background: #000000c1;
  height: 30px;
  color: white;
  padding: 0 10px;
  outline: none;
`;
const BtnSubmit = styled.button`
  background: #657a85;
  border: none;
  width: 50px;
  font-size: 20px;
  color: white;
  cursor: pointer;

  &:hover {
    background: #657a85a4;
  }
`;
const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
const Item = styled.li`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: ${(props) => props.isDone && "#eee"};
  padding: 15px 10px;

  & + & {
    border-top: 1px solid #eee;
  }
`;
const Checkbox = styled.input`
  width: 15px;
  height: 15px;
  margin-right: 8px;
`;
const Content = styled.span`
  vertical-align: top;
`;
const BtnWrapper = styled.div`
  display: flex;
`;
const Button = styled.button`
  width: 60px;
  padding: 5px;
  border: none;
  border-radius: 8px;
  color: white;
  background: ${(props) => props.color || "black"};
  margin-right: 5px;
  cursor: pointer;
`;

export default TodoList;
