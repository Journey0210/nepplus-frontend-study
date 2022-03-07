import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    case "ZERO":
      return { value: 0 };
    default:
      return state;
  }
}

const Counter3 = () => {
  const [state, dispatch] = useReducer(reducer, 10 ); // dispatch:액션을 발생시키는 함수
  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state}</b>입니다.
      </p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
      <button onClick={() => dispatch({ type: "ZERO" })}>0</button>
    </div>
  );
};

export default Counter3;
