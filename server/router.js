var express = require('express');
var toolmallHttp = require('./httpRequest.js');

var Urls = require('./formatURL.js');

//  POST 请求
// app.post('/', function (req, res) {
//   console.log("主页 POST 请求");
//   res.send('Hello POST');
// })

/* GET home page. */
var items = [{
  title: '文章1'
}, {
  title: '文章2'
}];


// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
// app.get('/ab*cd', function (req, res) {
//   console.log("/ab*cd GET 请求");
//   res.send('正则匹配');
// })

var routerItems = {};

//首页
routerItems.index = function (req, res) {
  toolmallHttp(req).then((data) => {
    res.send(data);
  }).catch((err) => {
    res.send(err);
  });
}

routerItems.hello = function (req, res) {
  console.log("主页 GET 请求" + Urls.getCompanyListUrl);
  res.send('Hello GET');
};

routerItems.del_user = function (req, res) {
  console.log("/del_user 响应 DELETE 请求");
  res.send('删除页面');
};

routerItems.login = function (req, res, next) {
  console.log("跳转到登录界面");
  res.render('login', {
    title: 'Hey',
    message: 'Hello there',
    date: new Date(),
    commonUrls: Urls
  })
};

routerItems.list = function (req, res, next) {
  res.render('list', {
    title: '文章列表',
    items: items
  });
};

routerItems.article = function (req, res, next) {
  res.render('article', {
    title: '文章列表',
    message: 'fendo8888'
  });
};

routerItems.list_user = function (req, res) {
  console.log("/list_user GET 请求");
  // res.send('用户列表页面');
  res.json({
    code: 0,
    msg: 'success',
    data: 'express'
  })
};

var router = express.Router();

router.get('/', routerItems.index); //首页
router.get('/hello', routerItems.hello);
router.get('/del_user', routerItems.del_user);
router.get('/login', routerItems.login);
router.get('/list', routerItems.list);
router.post('/article', routerItems.article);
router.get('/list_user', routerItems.list_user);

module.exports = router;
