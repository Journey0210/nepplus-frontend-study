import { useEffect, useState } from "react";

const Info = () => {
  const [name, setName] = useState("조혜진");
  const [nickName, setNickName] = useState("RootCho");

  useEffect(() => {
    console.log("마운트 될 때만 실행");

    return () => {
      console.log("언마운트 될 때 실행");
    }; //이 컴퍼넌트가 화면에서 사라질 때 실행. 뒷정리(cleanup)함수
  }, []);

  useEffect(() => {
    console.log("렌더링이 완료되었습니다."); //첫 마운트 될때, name이 업데이트 될 때마다 실행. Why? deps 배열의 value값이 name이니까
    return () => {
      console.log("clean-up"); //기존 name이 입력창에서 사라질 때 실행
      console.log(name); //기존 name이 콘솔에 찍힘
    };
  }, [name]);

  return (
    <>
      <div>
        <input
          value={name}
          placeholder="이름"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          value={nickName}
          placeholder="닉네임"
          onChange={(e) => setNickName(e.target.value)}
        />
      </div>
      <h1>이름: {name}</h1>
      <h1>닉네임: {nickName}</h1>
    </>
  );
};

export default Info;
