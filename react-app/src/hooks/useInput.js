import { useState } from "react";

const useInput = (init) => {
  const [state, setState] = useState(init);

  const onChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  return [state, onChange];
};

export default useInput;
