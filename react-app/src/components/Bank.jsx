import { useState, useReducer } from 'react';

const reducer = (state, action)=>{
    switch(action.type){
        case "deposit":
        return state + action.payload;
        case "withdraw":
        return state - action.payload;
        default: 
        return state;

    }


}


const Bank = () => {
    const [number,setNumber] = useState(0);
    const [money, dispatch] = useReducer(reducer, 0 ) //useReducer(reducer함수,state초기값)
    return (
        <div>
            <h1>useReducer은행에 오신 것을 환영합니다</h1>
            <p>잔고: {money}원</p>
            <input 
            type="number"
            value={number}
            onChange={(e)=>setNumber(parseInt(e.target.value))}
            step="1000"
            />
            <button onClick={()=>dispatch({type:"deposit", payload:number})}>예금</button>
            <button onClick={()=>dispatch({type:"withdraw", payload:number})}>출금</button>
        </div>
    );
};

export default Bank;