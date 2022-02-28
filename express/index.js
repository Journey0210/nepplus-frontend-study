const express = require("express");
const app = express();
const port = 3030;

app.get("/", (req, res) => {
  // "/" root페이지 http://localhost:3030
  res.send("hello World");
});
app.get("/page1", (req, res) => {
  //http://localhost:3030/page1
  res.send("page1입니다");
});

app.listen(port, () => {
  console.log(port + "포트에 서버가 열렸습니다.!");
});
