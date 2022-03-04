import { useState } from "react";

const EventPractice = () => {
  // 목표: 버튼을 누르면 input에 입력된 값을 alert
  //input value가 바뀔 때 마다 그 값을 useState변수에 저장
  //확인버튼을 누르면 useState변수 alert

  //   const [userName, setUserName] = useState("");
  //   const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    userName: "",
    message: "",
    message2: "",
  });

  const { userName, message, message2 } = form; //usetName =form.userName 이런식으로 변수에 담은 거 , 비구조화할당

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    // const newForm = { ...form }; //{...form} 하면 form객체의 데이터들이 복사됨. newForm객체와 Form객체의 내용이 같아짐.
    const newForm = { ...form, [name]: value }; //key값으로 변수명을 쓰고 싶을 때 []사용. ex,username: 조혜진 이런식으로 기존에 있던 것을 덮어씌운다.
    setForm(newForm);
  };

  const handleClick = () => {
    alert(userName + ":" + message + message2);
  };
  const handleKeypress = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
    console.log(e.key);
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input onChange={handleChange} placeholder="사용자명" name="userName" />
      <input
        onChange={handleChange}
        placeholder="아무거나 입력해 보세요"
        name="message"
        onKeyPress={handleKeypress}
      />
      <input onChange={handleChange} placeholder="사용자명" name="message2" />
      <button onClick={handleClick}>확인</button>
    </div>
  );
};

export default EventPractice;
