var express = require('express');
var axios = require('axios');
var POSThttp = require('./httpRequest.js');
var toolmallHttp = require('./httpRequest.js');
var bodyParser = require('body-parser');

// 使用body-parser解析post请求的参数，如果没有，req.body为undefined。
var cors = require('cors');
// cors 解决跨域
var app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: false
}));

//使用jade模板
// app.set('view engine', 'jade');

//使用ejs模板
app.set('view engine', 'ejs');

// app.get('/', (req, res) => {
//   POSThttp(req).then((data) => {
//     res.send(data);
//   }).catch((err) => {
//     res.send(err);
//   });
// });

app.get('/', (req, res) => {
  toolmallHttp(req).then((data) => { 
    res.send(data);
  }).catch((err) => {
    res.send(err);
  });
});

//  主页输出 "Hello World"
app.get('/hello', function (req, res) {
    console.log("主页 GET 请求");
    res.send('Hello GET');
})

//  POST 请求
app.post('/', function (req, res) {
  console.log("主页 POST 请求");
  res.send('Hello POST');
})

//del_user 页面响应
app.get('/del_user', function (req, res) {
  console.log("/del_user 响应 DELETE 请求");
  res.send('删除页面');
})

app.get('/login', function (req, res, next) {
  console.log("跳转到登录界面");
  res.render('index', {
    title: 'Hey',
    message: 'Hello there',
    date: new Date()
  })
})

//  /list_user 页面 GET 请求
app.get('/list_user', function (req, res) {
  console.log("/list_user GET 请求");
  // res.send('用户列表页面');
  res.json({
    code: 0,
    msg: 'success',
    data: 'express'
  })
})

// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*cd', function (req, res) {
  console.log("/ab*cd GET 请求");
  res.send('正则匹配');
})

app.listen(3000, () => {
  console.log('server loaded in http://localhost:3000')
});
module.exports = app;
