import { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  }; //reducer 에서 반환하는 상태는 곧 컴포넌트가 지닐 새로운 상태
}

const Info2 = () => {
  const [state, dispatch] = useReducer(reducer, { name: "", nickname: "" });
  const { name, nickname } = state;
  const onChange = (e) => dispatch(e.target);
  console.log(state);
  return (
    <>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b>
          {name}
        </div>
        <div>
          <b>닉네임:</b>
          {nickname}
        </div>
      </div>
    </>
  );
};

export default Info2;
