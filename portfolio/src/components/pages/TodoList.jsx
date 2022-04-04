import { useRef, useState } from "react";
import styled from "styled-components";

const TodoList = () => {
  const [text, setText] = useState("");
  const [lists, setLists] = useState([]);
  const nextId = useRef(1);
  
  const handleSubmit = (e) =>{
      e.preventDefault();
      if(text!=="") addList();
  }
  const addList = () => {
    const newLists = [
      ...lists,
      { id: nextId.current, text, isDone: false },
    ];
    setLists(newLists);
    nextId.current = nextId.current + 1;
    setText("");
  };

  const removeList = (id) => {
    const newList = lists.filter((list) => list.id !== id);
    setLists(newList);
  };

  const editList = (id) => {
    let newText = prompt("수정할 내용을 입력하세요");
    if(newText===""||newText===null) return;
    const newLists = lists.map(
      (list) => (list.id === id ? { ...list, text: newText } : list)
    );
    setLists(newLists);
  };

  const handleChecked = (id, checked) => {
    const newLists = lists.map(
      (list) => (list.id === id ? { ...list, isDone: checked } : list) 
    );
    setLists(newLists);
  };

  const handleCheckAll = (checked) => {
    const newLists = lists.map((list) => ({ ...list, isDone: checked })); //매개변수 활용
    setLists(newLists);
  };

  const toggleCheckAll = () => {
    const newLists = lists.map((list) => ({ ...list, isDone: !list.isDone }));
    setLists(newLists);
  };

  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const dayName = today.toLocaleDateString('ko-KR', {
    weekday: 'long',
  });


  const doneLists = lists.filter((list)=>(
    list.isDone===true
))
 const percentage = (doneLists.length/lists.length)*100


  return (
    <>
    <Wrapper>
      <NowDate>{dateString}  {dayName}</NowDate>
      <Title>
        <Text>오늘 할 일</Text>
        <IconClock src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678104-clock-256.png"/>
      </Title>
      <form
        onSubmit={handleSubmit}
      >
        <InputWrapper>
          <BtnAll
            type="button"
            onClick={() => handleCheckAll(true)}
            border={true}
          >
            전체완료
          </BtnAll>
          <BtnAll
            type="button"
            onClick={() => handleCheckAll(false)}
            border={true}
          >
            전체완료해제
          </BtnAll>
          <BtnAll type="button" onClick={toggleCheckAll} border={true}>
            전체반전
          </BtnAll>
          <BtnAll type="button" onClick={() => setLists([])}>
            전체삭제
          </BtnAll>
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
        {lists.map(({ id, text, isDone }) => (
          <Item key={id} isDone={isDone}>
            <label>
              <Checkbox
                type="checkbox"
                checked={isDone}
                onChange={(e) => handleChecked(id, e.target.checked)}
              />
              <Content>{text}</Content>
            </label>
            <BtnWrapper>
              <Button color="#2e7d32" onClick={() => editList(id)}>
                수정
              </Button>
              <Button color="#d32f2f" onClick={() => removeList(id)}>
                삭제
              </Button>
            </BtnWrapper>
          </Item>
          
        ))}
        {lists.length>0 && <Completed>달성률 {Math.round(percentage)}%</Completed>}
      </List>
    </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 600px;
  background: white;
  border: 1px solid #eee;
  margin: 50px auto;

  label {
    width: 100%;
  }
  font-family: "SuncheonR";
  position:relative;
`;
const NowDate = styled.div`
text-align: center;
font-size: 20px;
padding: 10px 0 ;
background: #b2dfdb;
`
const Title = styled.div`
  padding: 15px;
  text-align: center;
  background: #4db6ac;
  color: white;
  font-size: 27px;
  display:flex;
  align-items: center;
  justify-content: center;
`;
const Text = styled.span``
const IconClock = styled.img`
width: 30px;
height:30px;
margin-left: 8px;
`
const InputWrapper = styled.div`
  display: flex;
`;
const InputText = styled.input`
  flex: 1;
  border: none;
  background: #000000c1;
  height: 30px;
  color: white;
  font-size: 15px;
  padding: 0 10px;
  outline: none;
`;

const BtnAll = styled.button`
  background: #b2dfdb;
  border: none;
  border-right: ${(props) => props.border && "1px solid #000000c1"};
  cursor: pointer;
  font-size: 12px;
  &:hover {
    background: #e0f2f1;
  }
`;
const BtnSubmit = styled.button`
  background: #657a85dd;
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

const Content = styled.span`
  vertical-align: top;
`;
const Item = styled.li`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: ${(props) => (props.isDone ? "#ddd" : "#f7f4f45c")};
  padding: 15px 10px;
  
  ${Content} {
    text-decoration: ${(props) => props.isDone && "line-through"};
    font-size:15px;
  }

  & + & {
    border-top: 1px solid #eee;
  }
`;
const Completed = styled(Item)`
color: #0075ff;
font-weight: 600;
font-size: 15px;
padding: 15px;
`
const Checkbox = styled.input`
  width: 15px;
  height: 15px;
  margin-right: 8px;
  cursor: pointer;
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
