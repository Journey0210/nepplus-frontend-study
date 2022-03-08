import useInput from "../hooks/useInput";

const CustomHooks = () => {
  const [form, handleChange] = useInput({
    userName: "",
    message: "",
    message2: "",
  });

  const { userName, message, message2 } = form; //useName =form.userName 이런식으로 변수에 담은 거 , 비구조화할당

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

export default CustomHooks;
