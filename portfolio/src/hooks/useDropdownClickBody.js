import { useEffect, useRef } from "react";

const useDropdownClickBody = (onClose) => {
  const element = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      console.log(e.target, element.current);
      if (!element.current.contains(e.target)) onClose(); //누른 타겟이 버튼의 자식이 아닐때만
    };
    document.body.addEventListener("click", onClick);

    return () => {
      document.body.removeEventListener("click", onClick);
    };
  }, [onClose]);

  return element;
};

export default useDropdownClickBody;
