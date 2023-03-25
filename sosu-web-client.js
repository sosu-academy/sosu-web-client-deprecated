const express = require('express');
const session = require('express-session');
const fileStore = require('session-file-store')(session);
const app = express();
require('dotenv').config(); // Environment Variable Setting

const path = require('path');
const serveStatic = require('serve-static');      //특정 폴더의 파일들을 특정 패스로 접근할 수 있도록 열어주는 역할
const cookieParser = require('cookie-parser');
const cors = require('cors'); //다중 서버로 접속하게 해주는 기능을 제공, 다른 ip 로 다른서버에 접속

// 폴더 경로 설정.
const view_dist = path.join(__dirname, '', '/public/views');
const public = path.join(__dirname, '', '/public');

// 서버가 읽을 수 있도록 HTML 의 위치를 정의해줍니다. 
app.set('views', view_dist)
// Web Client Resource
app.use(express.static(public))
// Upload File Resource.
app.use('/resource', serveStatic(path.join(__dirname, 'resource')))

// 페이지 라우터 셋팅
const router = require('./server/index')

// 서버가 읽을 수 있도록 HTML 의 위치를 정의해줍니다. 
app.use('/', router);

app.use(cookieParser(process.env.COOKIE_KEY)); // 쿠키 세팅      

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
// app.use(function (err, req, res, next) {
//     console.log('Handle Error\t' + err + '\n\turl\t' + req.url);
//     next(err);
// });

// app.use(function (err, req, res, next) {
//     console.log("Status " + err.status + " Path "  + req.path)
//     // 404.html
//     if(err.status == undefined) {
//         console.log("다른 페이지로 안내합니다.")
//         res.render("/view/error/")
//         res.status(404).send({error: "Not Found Error"})
//     } else {
//         res.status(err.status || 500);
//         res.send(err || 'Error!!');
//     }
// });

app.use(function (req, res, next) {
    console.log("Error Request Path " + req.path)
    if(req.accepts('html')) {
        res.status(404).render('error/404')
        return
    }

    if(req.accepts('json')) {
        res.json({error: 'Not Found'})
        return
    }

    res.type('txt').send('Not Found')
})

const http = require('http');
http.createServer(app).listen(process.env.PORT, () => {
    console.log('Http Server Start, Port: ' + process.env.PORT);
})