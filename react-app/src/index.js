import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// const map = (callback) => {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(callback(arr[i], i));
//   }
//   return result;
// };

// const fliter = (callback) => {

//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if(callback(arr[i], i)){
//       result.push(callback(arr[i]))
//     };
//   }
// };

// const forEach = (callback) =>{
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i], i)
//   }
// }
