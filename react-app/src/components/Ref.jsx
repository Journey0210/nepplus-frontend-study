import { useRef } from "react";

//파일 업로드 버튼 누르면(onClick)/ input type=file이 클릭돼서(.click())/파일선택창 열림

const Ref = () => {
  const selectFile = useRef("");

  return (
    <div>
      <input
        type="file"
        style={{ display: "none" }}
        ref={selectFile} //input에 접근 하기위해 useRef사용
      />
      <button onClick={() => selectFile.current.click()}>파일 업로드</button>
    </div>
  );
};

export default Ref;
