import axios from "axios";

//instance(복사본) 사용
const instance = axios.create({
  headers: {
    "X-Naver-Client-Id": "3h2dgljMxFvGLKJCQ4PM",
    "X-Naver-Client-Secret": "GCduk7Zy1F",
  },
});
export const getMovieList = async (params) => {
  const result = await instance({
    url: "/v1/search/movie.json",
    method: "GET",
    params: params,
  });
  return result.data;
};

// export const getMovieList = async (params) => {
//     const config={
//         url: "/v1/search/movie.json",
//         method: "GET",
//         params,//(params: params와 같음)
//     }
//     const result = await instance(config);
//     return result.data;
//   };

export const getBookList = async (params) => {
  const result = await axios.get("/v1/search/book.json", {
    headers: {
      "X-Naver-Client-Id": "3h2dgljMxFvGLKJCQ4PM",
      "X-Naver-Client-Secret": "GCduk7Zy1F",
    },
    params: params,
  });
  return result;
};

export const getBookDetail = async (params) => {
  const result = await axios.get("/v1/search/book_adv.json", {
    headers: {
      "X-Naver-Client-Id": "3h2dgljMxFvGLKJCQ4PM",
      "X-Naver-Client-Secret": "GCduk7Zy1F",
    },
    params: params,
  });
  return result.data;
};
