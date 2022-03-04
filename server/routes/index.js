var express = require("express");
var router = express.Router();
var conn = require("../db");

/* GET home page. */
router.get("/", function (req, res, next) {
  //주고 받은 주소 /
  res.render("index", { title: "Node.js" }); //서버가 클라이언트에게 index.ejs 파일을 렌더링 하겠고, 그 파일에 필요한 변수는 title: "Node.js"다.
});

router.get("/todo", function (req, res, next) {
  const { name } = req.query; //url 내의 쿼리스트링을 가져오기
  const query = `SELECT * FROM todo WHERE name="${name}"`;
  conn.query(query, (error, results) => {
    if (error) throw error;
    console.log(results);
    res.render("todo", { name, todoList: results }); //todo.ejs를 렌더링해 보낼때, name과 todoList를 보내줌 , result는  배열처럼 생겼음. 콘솔로 찍어보아라. db의 쿼리함수는 시간이 좀 오래 걸림  conn.query(), 비동기 함수 제이쿼리 ajax도 비동기 함수
  });
});

router.post("/todo", function (req, res, next) {
  const { text, name } = req.body;
  const query = `
  INSERT INTO todo(name, text) VALUES("${name}","${text}");
  `;
  conn.query(query, (error, results) => {
    if (error) throw error;
    console.log(results);
    res.send({ id: results.insertId });
  });
});

//:id id에 무슨 값이 올지 모를 때, dynamic route
router.put("/todo/:id", function (req, res, next) {
  const { id } = req.params;
  const { text } = req.body;

  const query = `
  UPDATE todo SET text = "${text}" WHERE id = ${id};
  `;
  conn.query(query, (error, results) => {
    if (error) throw error;
    res.send("success");
  });
});

router.delete("/todo", (req, res) => {
  const { name } = req.body; //ajax 안에서의 name
  const query = `
  DELETE FROM todo WHERE name = "${name}";
  `;

  conn.query(query, (error, results) => {
    if (error) throw error;
    res.send("success");
  });
});
router.delete("/todo/:id", (req, res) => {
  const { id } = req.params;
  const query = `
  DELETE FROM todo WHERE id=${id};
  `;
  conn.query(query, (error, results) => {
    if (error) throw error;
    res.send("success");
  });
});

router.patch("/todo/all", (req, res) => {
  const { name, isDone } = req.body;
  const query = `
  UPDATE todo SET isDone=${isDone} WHERE name = '${name}';
  `;
  conn.query(query, (error, results) => {
    if (error) throw error;
    res.send("success");
  });
});

router.patch("/todo/:id", (req, res) => {
  const { id } = req.params;
  const { isDone } = req.body; //req.body.isDone는 ajax 안에 있는 data  isDone의 키값을 말함
  const query = `
  UPDATE todo SET isDone = ${isDone} WHERE id =${id};
  `;
  conn.query(query, (error, results) => {
    if (error) throw error;
    res.send("success");
  });
});

module.exports = router;
