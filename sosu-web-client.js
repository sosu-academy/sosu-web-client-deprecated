const express = require('express');
const session = require('express-session');

// 폴더 경로 설정.
const view_dist = path.join(__dirname, '', '/public/views');
const public = path.join(__dirname, '', '/public');

// 페이지 라우터 셋팅
const router = require('./server/index');



// 서버가 읽을 수 있도록 HTML 의 위치를 정의해줍니다. 
app.set('views', view_dist);
app.use('/', router);
// Json Body Parser
app.use(express.urlencoded({
    limit: "50mb",
    extended: true
}))

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
// 다중 접속을 위한 미들 웨어
app.use(cors());

// 세션 사용
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store: new fileStore()
}));

// Handle Error Setting
app.use(function (err, req, res, next) {
    console.log('Handle Error\t' + err + '\n\turl\t' + req.url);
    next(err);
});
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send(err || 'Error!!');
});