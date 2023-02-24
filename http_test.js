const http = require("http");
const app = http.createServer((req, res) => {
    res.writeHead(200, {"Content-type" : "text/html; charset=utf-8"});
    if (req.url === "/"){
        res.end("루트 입니다.");
    }else if (req.url === "/login"){
        res.end("로그인 화면입니다.");
    }
});

app.listen(3001, () => {
    console.log("http로 서버 가동");
});