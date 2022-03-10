import { useState } from "react";
import axios from "axios";

const Axios = () => {
  const [data, setDate] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=kr&apiKey=c5296411b31248d7a97bc5451fc9a313"
      );
      setDate(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </>
  );
};

export default Axios;
