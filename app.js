// 모듈
const express = require("express");
const app = express();

// 라우팅
const router = require("./routers/home");

// 앱설정
app.set("views", "./views");
app.set("view engine", "ejs");

// (use)미들웨어 설정
app.use("/", router);


// app.listen(3000, () => {
//     console.log("서버 가동");
// });
// bin/www.js로 이동

module.exports = app;