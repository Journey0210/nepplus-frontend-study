var express = require("express");
var router = express.Router();
var conn = require("../db");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Node.js" }); //서버가 클라이언트에게 index.ejs를 렌더링하여 보내겠다는 의미
});

router.get("/todo", function (req, res, next) {
  const name = req.query.name; //url 내의 쿼리스트링을 가져오기
  const query = `SELECT * FROM todo WHERE name="${name}"`;
  conn.query(query, (error, results) => {
    if (error) throw error;
    console.log(results);
    res.render("todo", { name: name, todoList: results }); //todo.ejs를 렌더링하여 보내줌.
  });
});

router.post("/todo", function (req, res, next) {
  const text = req.body.text;
  const name = req.body.name;
  const query = `
  INSERT INTO todo(name, text) VALUES("${name}","${text}");
  `;
  conn.query(query, (error, results) => {
    if (error) throw error;
    console.log(results);
    res.send("success");
  });
  res.send("success");
});

//:id id에 무슨 값이 올지 모를 때, dynamic route
router.put("/todo/:id", function (req, res, next) {
  const id = req.params.id;
  const text = req.body.text;

  const query = `
  UPDATE todo SET text = "${text}" WHERE id = ${id};
  `;
  conn.query(query, (error, results) => {
    if (error) throw error;
    res.send("success");
  });
});
module.exports = router;
